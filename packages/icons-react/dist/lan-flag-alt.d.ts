import React from 'react';

export interface LanFlagAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagAlt: React.FC<LanFlagAltProps>;
export default LanFlagAlt;
