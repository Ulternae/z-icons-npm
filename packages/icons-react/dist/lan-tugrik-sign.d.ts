import React from 'react';

export interface LanTugrikSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTugrikSign: React.FC<LanTugrikSignProps>;
export default LanTugrikSign;
