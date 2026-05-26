import React from 'react';

export interface LanListAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListAlt: React.FC<LanListAltProps>;
export default LanListAlt;
