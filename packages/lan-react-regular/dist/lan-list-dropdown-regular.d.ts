import React from 'react';

export interface LanListDropdownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListDropdownRegular(props: LanListDropdownRegularProps): React.ReactElement;
export default LanListDropdownRegular;
