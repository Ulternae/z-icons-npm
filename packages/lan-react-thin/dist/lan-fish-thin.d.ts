import React from 'react';

export interface LanFishThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishThin(props: LanFishThinProps): React.ReactElement;
export default LanFishThin;
