import { useState } from "react";
import { Input, Button } from "components-shadcn";
import { Eye, EyeOff } from "lucide-react";

export const PasswordInput = (props: React.ComponentProps<typeof Input>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input className="pr-10" {...props} type={showPassword ? "text" : "password"} />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </Button>
    </div>
  );
};
