import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { Button, Card, CardContent, CardHeader, CardTitle, Input, Skeleton, useToast } from "components-shadcn";
import { getProfile } from "api";
import { ErrorResponse } from "types";

export const ProfilePage = () => {
  const navigate = useNavigate();

  const { toast } = useToast();

  const { data, error, isLoading } = useQuery("profile", getProfile, {
    onError: (error: ErrorResponse) => {
      toast({
        title: "Ошибка",
        description: error.message,
        variant: "destructive",
      });
      navigate("/");
      return error.message;
    },
    keepPreviousData: false,
  });

  const exit = () => {
    localStorage.setItem("token", "");
    navigate("/");
  };

  if (error) return <div className="block text-lg font-medium text-gray-700 dark:text-gray-300">{error.message}</div>;

  return (
    <div className="p-6">
      <Card className="w-sm mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-center">Профиль</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {isLoading ? (
              <div>
                <Skeleton className="h-5 w-16 mb-1" />
                <Skeleton className="h-10 w-full" />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <Input value={data?.email} disabled className="mt-1" />
              </div>
            )}

            {isLoading ? (
              <div>
                <Skeleton className="h-5 w-16 mb-1" />
                <Skeleton className="h-10 w-full" />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">ID</label>
                <Input value={data?.id} disabled className="mt-1" />
              </div>
            )}

            <Button variant="outline" className="w-full" onClick={exit}>
              Выйти
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
