import React from 'react';

export interface LanLiraSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLiraSign: React.FC<LanLiraSignProps>;
export default LanLiraSign;
