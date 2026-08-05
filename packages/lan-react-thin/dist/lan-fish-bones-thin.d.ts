import React from 'react';

export interface LanFishBonesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishBonesThin(props: LanFishBonesThinProps): React.ReactElement;
export default LanFishBonesThin;
