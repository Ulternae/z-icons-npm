import React from 'react';

export interface LanDrawSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrawSquareRegular(props: LanDrawSquareRegularProps): React.ReactElement;
export default LanDrawSquareRegular;
