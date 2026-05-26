import React from 'react';

export interface LanBoothCurtainRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoothCurtainRegular: React.FC<LanBoothCurtainRegularProps>;
export default LanBoothCurtainRegular;
