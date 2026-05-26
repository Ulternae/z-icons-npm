import React from 'react';

export interface LanCampgroundRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCampgroundRegular: React.FC<LanCampgroundRegularProps>;
export default LanCampgroundRegular;
