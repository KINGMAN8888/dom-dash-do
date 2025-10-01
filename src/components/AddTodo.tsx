import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const todoSchema = z.object({
  text: z
    .string()
    .trim()
    .min(1, "لا يمكن أن تكون المهمة فارغة")
    .max(200, "يجب أن تكون المهمة أقل من 200 حرف"),
});

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = todoSchema.safeParse({ text });

    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    onAdd(result.data.text);
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (error) setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="أضف مهمة جديدة..."
            className="h-12 text-base pr-4 transition-all focus:ring-2 focus:ring-primary/20"
            dir="rtl"
            maxLength={200}
          />
          {text.length > 0 && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
              {text.length}/200
            </span>
          )}
        </div>
        <Button 
          type="submit" 
          size="lg" 
          className="gap-2 hover:scale-105 transition-transform shadow-md hover:shadow-lg"
          disabled={!text.trim()}
        >
          <Plus className="h-5 w-5" />
          إضافة
        </Button>
      </div>
      {error && (
        <p className="text-sm text-destructive pr-2 animate-slide-in" dir="rtl">
          {error}
        </p>
      )}
    </form>
  );
};
