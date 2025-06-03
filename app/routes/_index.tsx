import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "CV" },
    { name: "", content: "" },
  ];
};

export default function Index() {
  return (
    <div className="root" >
    </div>
  );
}
