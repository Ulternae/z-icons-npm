import React from 'react';

export interface LanHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH: React.FC<LanHProps>;
export default LanH;
