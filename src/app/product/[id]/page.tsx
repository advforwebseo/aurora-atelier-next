import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function Product({ params }: Props) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const { id } = await params;

  if (!id) {
    return notFound();
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Product: {id}</h1>
      <p>Test Page, this is MVP for autentification</p>
    </div>
  );
}
