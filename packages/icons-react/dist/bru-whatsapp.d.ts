import React from 'react';

export interface BruWhatsappProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWhatsapp: React.FC<BruWhatsappProps>;
export default BruWhatsapp;
