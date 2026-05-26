import React from 'react';

export interface LanPeopleDressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleDressRegular: React.FC<LanPeopleDressRegularProps>;
export default LanPeopleDressRegular;
