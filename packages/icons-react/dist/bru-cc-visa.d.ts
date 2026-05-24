import React from 'react';

export interface BruCcVisaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCcVisa: React.FC<BruCcVisaProps>;
export default BruCcVisa;
