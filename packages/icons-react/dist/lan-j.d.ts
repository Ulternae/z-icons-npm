import React from 'react';

export interface LanJProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJ: React.FC<LanJProps>;
export default LanJ;
