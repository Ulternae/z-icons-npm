import React from 'react';

export interface LanFishBonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishBones: React.FC<LanFishBonesProps>;
export default LanFishBones;
