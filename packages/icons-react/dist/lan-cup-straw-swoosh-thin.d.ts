import React from 'react';

export interface LanCupStrawSwooshThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupStrawSwooshThin: React.FC<LanCupStrawSwooshThinProps>;
export default LanCupStrawSwooshThin;
