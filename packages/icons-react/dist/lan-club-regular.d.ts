import React from 'react';

export interface LanClubRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClubRegular: React.FC<LanClubRegularProps>;
export default LanClubRegular;
