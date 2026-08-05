import React from 'react';

export interface LanCheckSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckSquareRegular(props: LanCheckSquareRegularProps): React.ReactElement;
export default LanCheckSquareRegular;
