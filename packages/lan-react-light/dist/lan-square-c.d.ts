import React from 'react';

export interface LanSquareCProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareC(props: LanSquareCProps): React.ReactElement;
export default LanSquareC;
