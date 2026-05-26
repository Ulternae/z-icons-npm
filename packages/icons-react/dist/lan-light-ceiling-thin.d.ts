import React from 'react';

export interface LanLightCeilingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightCeilingThin: React.FC<LanLightCeilingThinProps>;
export default LanLightCeilingThin;
