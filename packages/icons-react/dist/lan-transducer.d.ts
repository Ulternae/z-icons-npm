import React from 'react';

export interface LanTransducerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransducer: React.FC<LanTransducerProps>;
export default LanTransducer;
