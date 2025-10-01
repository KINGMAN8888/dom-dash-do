import { useState, useEffect } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { TodoItem } from "@/components/TodoItem";
import { AddTodo } from "@/components/AddTodo";
import { TodoStats } from "@/components/TodoStats";
import { TodoFilter, FilterType } from "@/components/TodoFilter";
import { toast } from "@/hooks/use-toast";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos([newTodo, ...todos]);
    toast({
      title: "✅ تمت الإضافة",
      description: "تم إضافة المهمة بنجاح",
    });
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          const newCompleted = !todo.completed;
          if (newCompleted) {
            toast({
              title: "🎉 أحسنت!",
              description: "تم إكمال المهمة",
            });
          }
          return { ...todo, completed: newCompleted };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast({
      title: "🗑️ تم الحذف",
      description: "تم حذف المهمة",
      variant: "destructive",
    });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.length - completedCount;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-subtle animation-delay-1s" />

      <div className="container max-w-3xl mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 shadow-lg animate-pulse-subtle">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-l from-primary via-primary to-accent bg-clip-text text-transparent">
            قائمة المهام
          </h1>
          <p className="text-muted-foreground flex items-center justify-center gap-2" dir="rtl">
            <Sparkles className="h-4 w-4 text-primary" />
            نظم مهامك اليومية باحترافية
          </p>
        </div>

        <div className="space-y-6">
          {/* Add Todo Card */}
          <div className="bg-card rounded-2xl shadow-xl p-6 border hover:shadow-2xl transition-shadow">
            <AddTodo onAdd={addTodo} />
          </div>

          {/* Stats Cards */}
          {totalCount > 0 && (
            <div className="animate-slide-in">
              <TodoStats
                total={totalCount}
                completed={completedCount}
                active={activeCount}
              />
            </div>
          )}

          {/* Filter Buttons */}
          {totalCount > 0 && (
            <div className="animate-slide-in">
              <TodoFilter
                currentFilter={filter}
                onFilterChange={setFilter}
                counts={{
                  all: totalCount,
                  active: activeCount,
                  completed: completedCount,
                }}
              />
            </div>
          )}

          {/* Todo List */}
          <div className="space-y-3">
            {filteredTodos.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground animate-slide-in" dir="rtl">
                {totalCount === 0 ? (
                  <>
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-primary/50" />
                    </div>
                    <p className="text-xl font-medium mb-2">لا توجد مهام بعد</p>
                    <p className="text-sm">ابدأ بإضافة مهمتك الأولى! 🚀</p>
                  </>
                ) : filter === "active" ? (
                  <>
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-success/50" />
                    </div>
                    <p className="text-xl font-medium mb-2">رائع! 🎉</p>
                    <p className="text-sm">لا توجد مهام نشطة، كل شيء مكتمل!</p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                    <p className="text-xl font-medium mb-2">لا توجد مهام مكتملة بعد</p>
                    <p className="text-sm">ابدأ بإنجاز مهامك! 💪</p>
                  </>
                )}
              </div>
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  {...todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
