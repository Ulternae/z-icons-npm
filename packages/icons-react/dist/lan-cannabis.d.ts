import React from 'react';

export interface LanCannabisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCannabis: React.FC<LanCannabisProps>;
export default LanCannabis;
