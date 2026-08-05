import React from 'react';

export interface LanListDropdownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListDropdown(props: LanListDropdownProps): React.ReactElement;
export default LanListDropdown;
