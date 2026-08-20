import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "../index.css";
import { Button } from "../components/buttons";
export const Home = () => {
  return (
    <div className="container  mx-auto p-8 text-center relative z-10  w-auto max-w-full ">
      <Card className="min-w-3xs w-auto gap-[0.3rem]">
        <CardHeader className="gap-0.5">
          <CardTitle className="text-3xl font-bold whitespace-nowrap">
            Fortal Weather
          </CardTitle>
        </CardHeader>

        <CardContent className="flex justify-end pr-4">
          <div className="flex flex-col items-end gap-2 justify-end">
            <Button
              coordinates={{ latitude: "-3.738639", longitude: "-38.535288" }}
              message="Benfica"
            />
            <Button
              coordinates={{ latitude: "-3.738639", longitude: "-38.535288" }}
              message="Messejana"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
