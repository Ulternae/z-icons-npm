import React from 'react';

export interface LanCaravanAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaravanAlt: React.FC<LanCaravanAltProps>;
export default LanCaravanAlt;
