import React from 'react';

export interface BruSquareWhatsappProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareWhatsapp: React.FC<BruSquareWhatsappProps>;
export default BruSquareWhatsapp;
