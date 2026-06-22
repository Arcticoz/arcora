type Props = {

  onClick: () => void;

};

export default function SwapDirectionButton({

  onClick

}: Props) {

  return (

    <div
      className="
      flex
      justify-center
      -my-3
      relative
      z-10
      "
    >

      <button

        onClick={onClick}

        className="
        w-12
        h-12
        rounded-full
        bg-zinc-900
        border
        border-white/10
        text-xl
        hover:rotate-180
        hover:scale-110
        duration-300
        "
      >

        ⇅

      </button>

    </div>

  );

}