import React from 'react';

export interface LanGolfClubRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGolfClubRegular: React.FC<LanGolfClubRegularProps>;
export default LanGolfClubRegular;
