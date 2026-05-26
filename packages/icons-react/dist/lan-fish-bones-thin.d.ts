import React from 'react';

export interface LanFishBonesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishBonesThin: React.FC<LanFishBonesThinProps>;
export default LanFishBonesThin;
