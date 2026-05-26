import React from 'react';

export interface LanMapMarkedAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkedAltThin: React.FC<LanMapMarkedAltThinProps>;
export default LanMapMarkedAltThin;
