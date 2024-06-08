import { ReactDemoSuspense } from "../../components";
import useSettings from "../../hooks/useSettings";
import { MatxLayouts } from "./index";

export default function MatxLayout(props: any) {
  const { settings } = useSettings();

  const Layout = MatxLayouts[settings.activeLayout as keyof typeof MatxLayouts];

  return (
    <ReactDemoSuspense>
      <Layout {...props} />
    </ReactDemoSuspense>
  );
}
