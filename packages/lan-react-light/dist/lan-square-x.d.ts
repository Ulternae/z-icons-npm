import React from 'react';

export interface LanSquareXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareX(props: LanSquareXProps): React.ReactElement;
export default LanSquareX;
