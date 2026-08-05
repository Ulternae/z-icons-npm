import React from 'react';

export interface LanFishingRodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishingRodThin(props: LanFishingRodThinProps): React.ReactElement;
export default LanFishingRodThin;
