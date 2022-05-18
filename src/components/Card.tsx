import { Heart } from "phosphor-react";

interface ICardProps {
  maxWidth: string;
  maxHeight: string;
}

export function Card({ maxWidth, maxHeight }: ICardProps) {
  return (
    <div
      className={`max-w-[${maxWidth}px] max-h-[${maxHeight}] p-3 flex flex-col gap-8 border-2 rounded`}
    >
      <h3>Equipe da faxina</h3>

      <img
        src="https://www.casinhaarrumada.com/wp-content/uploads/2018/03/faxina-30-minutos.png"
        alt="foto de faxina"
      />

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo
        ipsum officia quaerat facilis repellat rem doloremque delectus eum qui
        distinctio fugit tempora quibusdam.
      </p>

      <span className="flex justify-end mt-1">
        <Heart size={32} color="#F70202" weight="duotone" />
      </span>
    </div>
  );
}
