import React from 'react';

export interface LanListDropdownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListDropdownThin: React.FC<LanListDropdownThinProps>;
export default LanListDropdownThin;
