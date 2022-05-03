import { Fragment, useState } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import Input from "@components/common/input";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const ReservationModal = ({ open, close }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    type: "Энгийн",
  });

  const tables = ["Энгийн", "VIP", "Террас"];

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(process.env.NEXT_PUBLIC_API + "/reservations", {
        type: state.type,
        time: state.time,
        phone: Number(state.phone),
        seats: Number(state.seats),
      })
      .then(() => {
        toast.success("Амжилттай", {
          onClose: () => close(),
        });
        return close();
        // return router.push(`/reservation/${data._id}`);
      })
      .catch(() => toast.warn("Хүсэлт амжилтгүй"))
      .finally(() => setLoading(false));
  };
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={!loading ? close : () => toast.warn("Түр хүлээнэ үү.")}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black-300/10 backdrop-blur-lg" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Ширээний захиалга
              </Dialog.Title>
              <div className="border-t my-2" />
              <div>
                <p className="text-sm text-gray-500">
                  Та ширээний захиалга өгөх цаг, хүний тоогоо оруулна уу.
                  захиалга баталгаажсан мэдээлэлийг утасны дугаараар мэдэгдэнэ.
                </p>
              </div>
              <div className="border-t my-2" />
              <form
                className="flex flex-col gap-y-2 text-black"
                onSubmit={onSubmit}
                autoComplete="off"
              >
                <Input
                  placeholder="Утасны дугаар"
                  label="Утасны дугаар"
                  type="number"
                  name="phone"
                  required
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                />
                <div className="relative">
                  <span className="flex mb-1 text-gray-500 text-xs px-0.5">
                    Ширээний төрөл
                  </span>
                  <Listbox
                    value={state.type}
                    onChange={(table) => setState({ ...state, type: table })}
                  >
                    <Listbox.Button className="rounded-lg h-12 border w-full px-3 py-2 flex items-center">
                      {state.type}
                    </Listbox.Button>
                    <Listbox.Options className="absolute rounded-md bg-white w-full shadow-lg py-2">
                      {tables.map((table, index) => (
                        <Listbox.Option
                          key={index}
                          value={table}
                          disabled={false}
                          className="my-1 hover:bg-black/10 cursor-pointer mx-2 rounded px-1 h-8 flex items-center"
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {table}
                              </span>
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
                <Input
                  label="Хүний тоо"
                  placeholder="Хүний тоо"
                  required
                  name="seats"
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                />
                <Input
                  name="time"
                  placeholder="Цаг"
                  label="Цаг"
                  type="time"
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                />
                <div className="border-t my-2" />
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm bg-yellow-500 font-bold border border-transparent rounded-md hover:bg-brand-primary-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary uppercase disabled:bg-gray-400 disabled:text-gray-300"
                  disabled={loading}
                >
                  Захиалга өгөх
                </button>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ReservationModal;
