import React from 'react';

export interface LanSquareBProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareB(props: LanSquareBProps): React.ReactElement;
export default LanSquareB;
