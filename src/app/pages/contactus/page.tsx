import Contactus from '@/components/ContactUs/Contactus'
import CatoLayout from '@/components/Layouts/CatoLayout';
import MainLayout from '@/components/Layouts/MainLayout'
import React from 'react'

const page = () => {
  return (
    <CatoLayout>
      <Contactus />
    </CatoLayout>
  );
}

export default page