import React from 'react';

export interface LanFishingRodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishingRodRegular: React.FC<LanFishingRodRegularProps>;
export default LanFishingRodRegular;
