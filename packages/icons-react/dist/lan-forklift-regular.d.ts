import React from 'react';

export interface LanForkliftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForkliftRegular: React.FC<LanForkliftRegularProps>;
export default LanForkliftRegular;
