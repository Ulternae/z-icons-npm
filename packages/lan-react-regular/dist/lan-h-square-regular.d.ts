import React from 'react';

export interface LanHSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHSquareRegular(props: LanHSquareRegularProps): React.ReactElement;
export default LanHSquareRegular;
