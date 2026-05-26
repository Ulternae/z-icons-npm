import React from 'react';

export interface LanTransducerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransducerRegular: React.FC<LanTransducerRegularProps>;
export default LanTransducerRegular;
