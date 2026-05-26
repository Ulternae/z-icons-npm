import React from 'react';

export interface LanTrophyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrophyRegular: React.FC<LanTrophyRegularProps>;
export default LanTrophyRegular;
