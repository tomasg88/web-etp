import React from 'react';
import ControlPanel from 'modules/services/components/control-panel/ControlPanel';
import ServicesHero from 'modules/services/components/hero/ServicesHero';
import AfterSessionSection from 'modules/services/components/sections/AfterSession';
import DiscountsSection from 'modules/services/components/sections/Discounts';
import PaymentsSection from 'modules/services/components/sections/Payments';
import ReviewsSection from 'modules/services/components/sections/Reviews';
import SessionInfoSection from 'modules/services/components/sections/SessionInfo';
import SessionPreparationSection from 'modules/services/components/sections/SessionPreparation';
import SessionTypeSection from 'modules/services/components/sections/SessionType';

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <ServicesHero />

      {/* Type - remote or present */}
      <SessionTypeSection />

      <SessionInfoSection />

      <div className="bg-gradient-to-b from-salmon-300 to-skin-200 opacity-40 h-28 block"></div>
      <SessionPreparationSection />

      {/* After session */}
      <AfterSessionSection />
      <div className="bg-gradient-to-t from-salmon-300 to-skin-200 opacity-40 h-28 block"></div>

      {/* Discount section */}
      <DiscountsSection />

      {/* Payments section */}
      <PaymentsSection />

      {/* Comments / Opinions */}
      <ReviewsSection />

      <ControlPanel />
    </>
  );
}
