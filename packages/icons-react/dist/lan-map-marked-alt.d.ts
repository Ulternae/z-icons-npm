import React from 'react';

export interface LanMapMarkedAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkedAlt: React.FC<LanMapMarkedAltProps>;
export default LanMapMarkedAlt;
