import React from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Search from "@/components/Search";
import FileUploader from "@/components/FileUploader";


const Header = () => {
   return (
    <header className="hidden items-center justify-between gap-5 p-5 sm:flex lg:py-7 xl:gap-10 ">
      <Search />
      <div className="flex-center min-w-fit gap-4">
        <FileUploader />
        <form>
          <Button type="submit" className="flex-center h-[52px] min-w-[54px] items-center rounded-full bg-brand/10 p-0 text-brand shadow-none transition-all hover:bg-brand/20 !important">
            <Image
              src="/assets/icons/logout.svg"
              alt="logo"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
}

export default Header;






// import Image from 'next/image';
// import Search from './Search';
// import FileUploader from './FileUploader';

// const Header = () => {
//   return (
//     <header className="hidden items-center justify-between gap-5 p-5 sm:flex lg:py-7 xl:gap-10">
//       <Search />
//       <div className="flex-center min-w-fit gap-4">
//         <FileUploader />
//         <form>
//           <button type="submit" className="sign-out">
//             <Image
//               src="/assets/icons/logout.svg"
//               alt="logout"
//               width={24}
//               height={24}
//               className="w-6"
//             />
//           </button>
//         </form>
//       </div>
//     </header>
//   );
// };

// export default Header;