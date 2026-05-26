import React from 'react';

export interface LanBoxOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxOpen: React.FC<LanBoxOpenProps>;
export default LanBoxOpen;
