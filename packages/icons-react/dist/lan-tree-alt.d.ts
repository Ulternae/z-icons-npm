import React from 'react';

export interface LanTreeAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeAlt: React.FC<LanTreeAltProps>;
export default LanTreeAlt;
