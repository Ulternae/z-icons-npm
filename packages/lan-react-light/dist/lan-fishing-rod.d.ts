import React from 'react';

export interface LanFishingRodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishingRod(props: LanFishingRodProps): React.ReactElement;
export default LanFishingRod;
