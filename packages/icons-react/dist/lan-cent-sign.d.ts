import React from 'react';

export interface LanCentSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCentSign: React.FC<LanCentSignProps>;
export default LanCentSign;
