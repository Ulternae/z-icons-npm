import React from 'react';

export interface LanFishBonesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishBonesRegular(props: LanFishBonesRegularProps): React.ReactElement;
export default LanFishBonesRegular;
