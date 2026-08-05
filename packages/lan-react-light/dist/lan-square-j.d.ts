import React from 'react';

export interface LanSquareJProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareJ(props: LanSquareJProps): React.ReactElement;
export default LanSquareJ;
