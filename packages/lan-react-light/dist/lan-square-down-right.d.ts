import React from 'react';

export interface LanSquareDownRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDownRight(props: LanSquareDownRightProps): React.ReactElement;
export default LanSquareDownRight;
