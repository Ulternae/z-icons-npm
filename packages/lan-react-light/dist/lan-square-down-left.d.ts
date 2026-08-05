import React from 'react';

export interface LanSquareDownLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDownLeft(props: LanSquareDownLeftProps): React.ReactElement;
export default LanSquareDownLeft;
