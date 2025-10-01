import { CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TodoStatsProps {
  total: number;
  completed: number;
  active: number;
}

export const TodoStats = ({ total, completed, active }: TodoStatsProps) => {
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-3 gap-3" dir="rtl">
      <Card className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-2">
          <Clock className="h-5 w-5 text-primary" />
          <span className="text-2xl font-bold text-primary">{active}</span>
        </div>
        <p className="text-xs text-muted-foreground">نشطة</p>
      </Card>

      <Card className="p-4 bg-gradient-to-br from-success/5 to-success/10 border-success/20 hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-2">
          <CheckCircle2 className="h-5 w-5 text-success" />
          <span className="text-2xl font-bold text-success">{completed}</span>
        </div>
        <p className="text-xs text-muted-foreground">مكتملة</p>
      </Card>

      <Card className="p-4 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-2">
          <TrendingUp className="h-5 w-5 text-accent" />
          <span className="text-2xl font-bold text-accent">{completionRate}%</span>
        </div>
        <p className="text-xs text-muted-foreground">الإنجاز</p>
      </Card>
    </div>
  );
};
