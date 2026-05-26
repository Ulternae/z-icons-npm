import React from 'react';

export interface LanFishFinsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishFinsRegular: React.FC<LanFishFinsRegularProps>;
export default LanFishFinsRegular;
