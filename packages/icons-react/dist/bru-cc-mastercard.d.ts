import React from 'react';

export interface BruCcMastercardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCcMastercard: React.FC<BruCcMastercardProps>;
export default BruCcMastercard;
