import React from 'react';

export interface LanRightLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRightLeft(props: LanRightLeftProps): React.ReactElement;
export default LanRightLeft;
