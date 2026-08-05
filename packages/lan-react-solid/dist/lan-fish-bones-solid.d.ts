import React from 'react';

export interface LanFishBonesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishBonesSolid(props: LanFishBonesSolidProps): React.ReactElement;
export default LanFishBonesSolid;
