import React from 'react';

export interface LanEyeLowVisionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeLowVisionRegular: React.FC<LanEyeLowVisionRegularProps>;
export default LanEyeLowVisionRegular;
