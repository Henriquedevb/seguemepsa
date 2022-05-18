import { Card } from "./Card";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export function Home() {
  return (
    <div className="min-h-[100vh]">
      <NavBar />
      <section className="px-32 py-12 min-h-[calc(100vh-230px)] flex flex-wrap gap-8 justify-around">
        <Card maxWidth="600" maxHeight="400" />
        <Card maxWidth="340" maxHeight="400" />
        <Card maxWidth="340" maxHeight="400" />
        <Card maxWidth="340" maxHeight="400" />
        <Card maxWidth="340" maxHeight="400" />
        <Card maxWidth="340" maxHeight="400" />
        <Card maxWidth="340" maxHeight="400" />
      </section>

      <div className="bg-zinc-800 flex justify-between p-6">
        <div className="flex flex-col gap-2 justify-end">
          <h1 className="text-gray-100 text-lg">De SEG a SEX</h1>
          <h1 className="text-gray-100 text-lg">
            Telefone para contato: 61 9 9999-9999
          </h1>
          <h1 className="text-gray-100 text-lg">
            Email: seguemepsa@email.com.
          </h1>
          <h1 className="text-gray-100 text-lg">Vem e segue-me!</h1>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1009.4191861257591!2d-47.93350566692516!3d-16.110235292418178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935985686d13715d%3A0xed51c2e4c354f9b9!2sPra%C3%A7a%20Santo%20Antonio!5e0!3m2!1spt-BR!2sbr!4v1652916025351!5m2!1spt-BR!2sbr"
          width="750"
          height="350"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
