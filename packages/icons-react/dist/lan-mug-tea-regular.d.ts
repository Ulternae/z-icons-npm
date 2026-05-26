import React from 'react';

export interface LanMugTeaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugTeaRegular: React.FC<LanMugTeaRegularProps>;
export default LanMugTeaRegular;
