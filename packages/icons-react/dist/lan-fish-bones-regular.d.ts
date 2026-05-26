import React from 'react';

export interface LanFishBonesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishBonesRegular: React.FC<LanFishBonesRegularProps>;
export default LanFishBonesRegular;
