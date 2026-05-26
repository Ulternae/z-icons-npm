import React from 'react';

export interface LanTransducerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransducerThin: React.FC<LanTransducerThinProps>;
export default LanTransducerThin;
