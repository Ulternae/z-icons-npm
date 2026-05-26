import React from 'react';

export interface LanListDropdownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListDropdownRegular: React.FC<LanListDropdownRegularProps>;
export default LanListDropdownRegular;
