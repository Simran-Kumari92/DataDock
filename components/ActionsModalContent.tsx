import { convertFileSize, formatDateTime } from '@/lib/utils';
import { Models } from 'node-appwrite';
import FormattedDateTime from './FormattedDateTime';
import Thumbnail from './Thumbnail';

const ImageThumbnail = ({ file }: { file: Models.Document }) => (
  <div className="!mb-1 flex items-center gap-3 rounded-xl border border-light-200/40 bg-light-400/50 p-3">
    <Thumbnail type={file.type} extension={file.extension} url={file.url} />
    <div className="flex flex-col">
      <p className="text-[14px] leading-[20px] font-semibold mb-1">{file.name}</p>
      <FormattedDateTime date={file.$createdAt} className="text-[12px] leading-[16px] font-normal" />
    </div>
  </div>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex">
    <p className=" body-2 w-[30%] text-light-100 text-left">{label}</p>
    <p className="text-[14px] leading-[20px] font-semibold flex-1 text-left">{value}</p>
  </div>
);

export const FileDetails = ({ file }: { file: Models.Document }) => {
  return (
    <>
      <ImageThumbnail file={file} />
      <div className="space-y-4 px-2 pt-2">
        <DetailRow label="Format:" value={file.extension} />
        <DetailRow label="Size:" value={convertFileSize(file.size)} />
        <DetailRow label="Owner:" value={file.owner.fullName} />
        <DetailRow label="Last edit:" value={formatDateTime(file.$updatedAt)} />
      </div>
    </>
  );
};
