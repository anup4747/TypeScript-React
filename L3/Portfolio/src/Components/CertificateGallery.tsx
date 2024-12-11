import React, { useState } from 'react';
import Modal from './Modal';
import { Certificate } from '.././Data/types';

interface CertificateGalleryProps {
  certificates: Certificate[];
}

const CertificateGallery: React.FC<CertificateGalleryProps> = ({ certificates }) => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="certificate-gallery mt-8">
      <h2 className="text-2xl font-semibold text-center sm:text-left">Certificate Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="border rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => openModal(certificate)}
          >
            <img
              src={certificate.img}
              alt={certificate.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">{certificate.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedCertificate && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          imgSrc={selectedCertificate.img}
          title={selectedCertificate.title}
        />
      )}
    </section>
  );
};

export default CertificateGallery;
