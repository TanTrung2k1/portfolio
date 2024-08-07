import React from "react";
import Modal from "react-modal";
import { FiDownload } from "react-icons/fi";

interface CvModalProps {
  pdfEnUrl: string | null;
  pdfVnUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const CvModal: React.FC<CvModalProps> = ({
  pdfEnUrl,
  pdfVnUrl,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      className="modal fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-6 text-center">Select CV</h2>
        <div className="flex flex-col gap-4">
          <a
            href={pdfEnUrl || "#"}
            className="flex items-center justify-center text-[1rem] bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              Resume-EN <FiDownload />
            </div>
          </a>
          <a
            href={pdfVnUrl || "#"}
            className="flex items-center justify-center text-[1rem] bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              Resume-VN <FiDownload />
            </div>
          </a>
          <button
            onClick={onClose}
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CvModal;
