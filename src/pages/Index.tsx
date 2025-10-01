import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { TodoItem } from "@/components/TodoItem";
import { AddTodo } from "@/components/AddTodo";
import { toast } from "@/hooks/use-toast";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    toast({
      title: "تمت الإضافة",
      description: "تم إضافة المهمة بنجاح",
    });
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast({
      title: "تم الحذف",
      description: "تم حذف المهمة",
      variant: "destructive",
    });
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-l from-primary to-primary/60 bg-clip-text text-transparent">
            قائمة المهام
          </h1>
          <p className="text-muted-foreground" dir="rtl">
            نظم مهامك اليومية بسهولة
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-2xl shadow-lg p-6 border">
            <AddTodo onAdd={addTodo} />
          </div>

          {totalCount > 0 && (
            <div className="flex items-center justify-between px-2" dir="rtl">
              <p className="text-sm text-muted-foreground">
                المجموع: {totalCount} مهمة
              </p>
              <p className="text-sm text-muted-foreground">
                مكتمل: {completedCount} من {totalCount}
              </p>
            </div>
          )}

          <div className="space-y-3">
            {todos.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground" dir="rtl">
                <p className="text-lg mb-2">لا توجد مهام بعد</p>
                <p className="text-sm">ابدأ بإضافة مهمتك الأولى! 🚀</p>
              </div>
            ) : (
              todos.map((todo) => (
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
