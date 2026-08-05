import React from 'react';

export interface LanFishingRodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishingRodRegular(props: LanFishingRodRegularProps): React.ReactElement;
export default LanFishingRodRegular;
