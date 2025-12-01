import { PostHogProvider } from './posthog';
import { ThemeProvider } from './theme';

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ 
  children
}: Props) => {
  return (
    <PostHogProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </PostHogProvider>
  );
};
