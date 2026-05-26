import React from 'react';

export interface LanIconsAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIconsAlt: React.FC<LanIconsAltProps>;
export default LanIconsAlt;
