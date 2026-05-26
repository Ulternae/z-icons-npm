import React from 'react';

export interface LanLightCeilingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightCeiling: React.FC<LanLightCeilingProps>;
export default LanLightCeiling;
