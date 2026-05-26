import React from 'react';

export interface LanListDropdownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListDropdown: React.FC<LanListDropdownProps>;
export default LanListDropdown;
