import React from 'react';

export interface LanFlorinSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlorinSign: React.FC<LanFlorinSignProps>;
export default LanFlorinSign;
