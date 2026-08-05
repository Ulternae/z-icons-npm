import React from 'react';

export interface LanFishBonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishBones(props: LanFishBonesProps): React.ReactElement;
export default LanFishBones;
