import ReservationModal from "@components/common/header/reservation";
import { useState } from "react";
import { useRouter } from "next/router";
const Page = () => {
  const router = useRouter();

  const [modal, setModal] = useState(true);

  return (
    <ReservationModal
      open={modal}
      close={() => {
        setModal(false);
        return router.push("/");
      }}
    />
  );
};
export default Page;
