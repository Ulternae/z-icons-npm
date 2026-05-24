import React from 'react';

export interface BruCentercodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCentercode: React.FC<BruCentercodeProps>;
export default BruCentercode;
