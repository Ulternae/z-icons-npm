import React from 'react';

export interface LanCardClubRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardClubRegular: React.FC<LanCardClubRegularProps>;
export default LanCardClubRegular;
