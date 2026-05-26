import React from 'react';

export interface LanFishBonesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishBonesSolid: React.FC<LanFishBonesSolidProps>;
export default LanFishBonesSolid;
