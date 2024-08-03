import { Card } from "@/components/ui/card";
type HomeCardProps = {
  children?: React.ReactNode;
  className?: string;
};
export default function HomeCard({ children, className }: HomeCardProps) {
  return (
    <Card className={"whitespace-pre-wrap p-2 h-64 overflow-hidden " + (className||'')}>
      {children}
    </Card>
  );
}
