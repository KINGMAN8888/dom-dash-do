import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FilterType = "all" | "active" | "completed";

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    all: number;
    active: number;
    completed: number;
  };
}

export const TodoFilter = ({ currentFilter, onFilterChange, counts }: TodoFilterProps) => {
  const filters: { value: FilterType; label: string }[] = [
    { value: "all", label: "الكل" },
    { value: "active", label: "نشطة" },
    { value: "completed", label: "مكتملة" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 p-1 bg-muted/50 rounded-lg" dir="rtl">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={currentFilter === filter.value ? "default" : "ghost"}
          size="sm"
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            "flex-1 transition-all relative",
            currentFilter === filter.value && "shadow-md"
          )}
        >
          {filter.label}
          {counts[filter.value] > 0 && (
            <span
              className={cn(
                "mr-2 px-1.5 py-0.5 text-xs rounded-full font-medium",
                currentFilter === filter.value
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-primary/10 text-primary"
              )}
            >
              {counts[filter.value]}
            </span>
          )}
        </Button>
      ))}
    </div>
  );
};
