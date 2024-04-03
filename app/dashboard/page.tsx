import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import EmployeesStats from "./components/employees/employees-stats";
import TeamsStats from "./components/teams/teams-stats";

const TABS_CONFIG = [
  { value: "employees", label: "Employees stats", component: EmployeesStats },
  { value: "teams", label: "Teams stats", component: TeamsStats },
];

export default function DashboardPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        {TABS_CONFIG.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TABS_CONFIG.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <tab.component />
        </TabsContent>
      ))}
    </Tabs>
  );
}