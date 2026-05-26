import React from 'react';

export interface LanTrophyAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrophyAltRegular: React.FC<LanTrophyAltRegularProps>;
export default LanTrophyAltRegular;
