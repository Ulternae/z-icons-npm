import React from 'react';

export interface LanXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanX: React.FC<LanXProps>;
export default LanX;
