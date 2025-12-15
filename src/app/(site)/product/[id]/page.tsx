import { notFound } from "next/navigation";

export default async function Product(props: PageProps<"/product/[id]">) {
  const { id } = await props.params;

  if (!id) return notFound();

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Product: {id}</h1>
      <p>Test page, project is developing for auth purposes</p>
    </div>
  );
}
