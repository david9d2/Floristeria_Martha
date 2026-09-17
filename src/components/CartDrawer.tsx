import type { CartLine } from "../App";

type Props = {
  open: boolean;
  lines: CartLine[];
  onClose: () => void;
  onInc: (key: string) => void;
  onDec: (key: string) => void;
  onRemove: (key: string) => void;
  onClear: () => void;
};

const fmt = (n: number) => "L " + n.toLocaleString("en-US");

function buildMessage(lines: CartLine[]) {
  if (lines.length === 0) return "";
  if (lines.length === 1) {
    const l = lines[0];
    const qty = l.qty > 1 ? ` (cantidad: ${l.qty})` : "";
    return `Hola, me gustaría pedir este ${l.name} que cuesta ${l.price}${qty}`;
  }
  const total = lines.reduce((s, l) => s + l.priceNum * l.qty, 0);
  const items = lines
    .map((l, i) => `${i + 1}. ${l.qty}x ${l.name} — ${l.price}`)
    .join("\n");
  return `Hola, me gustaría pedir estos artículos:\n${items}\n\nTotal: ${fmt(total)}`;
}

export default function CartDrawer({
  open,
  lines,
  onClose,
  onInc,
  onDec,
  onRemove,
  onClear,
}: Props) {
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const total = lines.reduce((s, l) => s + l.priceNum * l.qty, 0);
  const waHref =
    lines.length > 0
      ? `https://wa.me/50433805133?text=${encodeURIComponent(buildMessage(lines))}`
      : "#";

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden
      />
      <aside
        className={`fixed z-50 bottom-0 inset-x-0 md:inset-x-auto md:top-0 md:right-0 md:w-[400px] h-[85vh] md:h-full bg-[#fdfbfa] shadow-2xl flex flex-col transition-transform duration-300 ${
          open
            ? "translate-y-0 md:translate-x-0"
            : "translate-y-full md:translate-y-0 md:translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#efebe9] shrink-0">
          <h2 className="font-serif text-2xl text-[#2e1e1c]">
            Mi carrito
            {count > 0 && (
              <span className="text-[#5f7d6b] ml-1">({count})</span>
            )}
          </h2>
          <button
            onClick={onClose}
            aria-label="Cerrar carrito"
            className="size-9 rounded-full text-[#6b5a58] hover:bg-[#efebe9] flex items-center justify-center text-xl"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center h-full py-10">
              <div className="bg-[#eff2f0] rounded-full size-16 flex items-center justify-center mb-4">
                <svg className="size-7 text-[#5f7d6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 6h-2a3 3 0 0 0-6 0H6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2Zm-6-1a1 1 0 0 1 2 0h-2Zm6 2v11H6V7h12Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-serif text-xl text-[#2e1e1c]">
                Tu carrito está vacío
              </p>
              <p className="text-sm text-[#6b5a58] mt-2">
                Agrega arreglos desde el catálogo para hacer tu pedido.
              </p>
              <button
                onClick={onClose}
                className="mt-5 bg-[#5f7d6b] text-white text-xs font-semibold py-3 px-6 rounded-full"
              >
                Seguir explorando
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map((l) => (
                <li
                  key={l.key}
                  className="bg-white rounded-2xl border border-[#efebe9] p-3 flex gap-3"
                >
                  <img
                    alt={l.name}
                    src={l.img}
                    className="size-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-serif text-sm text-[#2e1e1c] leading-snug">
                        {l.name}
                      </p>
                      <button
                        onClick={() => onRemove(l.key)}
                        aria-label={`Quitar ${l.name}`}
                        className="text-[#b0a49f] hover:text-[#2e1e1c] shrink-0 px-1"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-[#5f7d6b] text-xs font-semibold mt-1">
                      {l.price}
                    </p>
                    <div className="flex items-center mt-2.5">
                      <div className="flex items-center border border-[#efebe9] rounded-full overflow-hidden">
                        <button
                          onClick={() => onDec(l.key)}
                          aria-label="Menos"
                          className="px-3 py-1 text-sm text-[#6b5a58]"
                        >
                          −
                        </button>
                        <span className="min-w-7 text-center text-sm font-semibold">
                          {l.qty}
                        </span>
                        <button
                          onClick={() => onInc(l.key)}
                          aria-label="Más"
                          className="px-3 py-1 text-sm text-[#6b5a58]"
                        >
                          +
                        </button>
                      </div>
                      <p className="ml-auto text-sm font-bold text-[#2e1e1c]">
                        {fmt(l.priceNum * l.qty)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-[#efebe9] p-5 space-y-3 shrink-0">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#6b5a58] font-semibold">Total</span>
              <span className="text-xl font-bold text-[#2e1e1c]">{fmt(total)}</span>
            </div>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 bg-[#25d366] text-white font-bold text-sm py-4 rounded-full hover:bg-[#1fb254] transition-colors"
            >
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar pedido por WhatsApp
            </a>
            <button
              onClick={onClear}
              className="w-full text-center text-xs text-[#6b5a58] hover:text-[#2e1e1c]"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </aside>
    </>
  );
}