import React from 'react';

export interface LanFileAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAlt: React.FC<LanFileAltProps>;
export default LanFileAlt;
