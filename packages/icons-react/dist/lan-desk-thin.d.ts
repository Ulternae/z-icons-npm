import React from 'react';

export interface LanDeskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDeskThin: React.FC<LanDeskThinProps>;
export default LanDeskThin;
