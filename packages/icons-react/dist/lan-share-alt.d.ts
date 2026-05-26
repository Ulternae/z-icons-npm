import React from 'react';

export interface LanShareAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShareAlt: React.FC<LanShareAltProps>;
export default LanShareAlt;
