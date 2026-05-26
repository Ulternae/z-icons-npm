import React from 'react';

export interface LanBoxAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxAlt: React.FC<LanBoxAltProps>;
export default LanBoxAlt;
