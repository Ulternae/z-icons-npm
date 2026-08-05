import React from 'react';

export interface LanArrowsLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsLeftRight(props: LanArrowsLeftRightProps): React.ReactElement;
export default LanArrowsLeftRight;
