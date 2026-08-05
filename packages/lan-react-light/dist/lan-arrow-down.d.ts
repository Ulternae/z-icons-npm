import React from 'react';

export interface LanArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowDown(props: LanArrowDownProps): React.ReactElement;
export default LanArrowDown;
