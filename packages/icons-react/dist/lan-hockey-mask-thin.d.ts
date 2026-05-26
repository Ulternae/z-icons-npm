import React from 'react';

export interface LanHockeyMaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyMaskThin: React.FC<LanHockeyMaskThinProps>;
export default LanHockeyMaskThin;
