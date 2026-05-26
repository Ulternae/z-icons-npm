import React from 'react';

export interface LanAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlt: React.FC<LanAltProps>;
export default LanAlt;
