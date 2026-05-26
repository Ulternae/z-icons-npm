import React from 'react';

export interface LanFishRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishRegular: React.FC<LanFishRegularProps>;
export default LanFishRegular;
