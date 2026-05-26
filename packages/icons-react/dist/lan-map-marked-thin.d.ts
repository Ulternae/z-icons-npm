import React from 'react';

export interface LanMapMarkedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkedThin: React.FC<LanMapMarkedThinProps>;
export default LanMapMarkedThin;
