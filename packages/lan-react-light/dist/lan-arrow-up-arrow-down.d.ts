import React from 'react';

export interface LanArrowUpArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowUpArrowDown(props: LanArrowUpArrowDownProps): React.ReactElement;
export default LanArrowUpArrowDown;
