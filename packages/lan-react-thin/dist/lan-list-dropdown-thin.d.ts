import React from 'react';

export interface LanListDropdownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListDropdownThin(props: LanListDropdownThinProps): React.ReactElement;
export default LanListDropdownThin;
