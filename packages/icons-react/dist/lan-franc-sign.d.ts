import React from 'react';

export interface LanFrancSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrancSign: React.FC<LanFrancSignProps>;
export default LanFrancSign;
