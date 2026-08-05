import React from 'react';

export interface LanMinusSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusSquareRegular(props: LanMinusSquareRegularProps): React.ReactElement;
export default LanMinusSquareRegular;
