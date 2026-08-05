import React from 'react';

export interface LanFishProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFish(props: LanFishProps): React.ReactElement;
export default LanFish;
