import React from 'react';

export interface LanWindowAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowAlt: React.FC<LanWindowAltProps>;
export default LanWindowAlt;
