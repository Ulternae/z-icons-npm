import React from 'react';

export interface LanSquareXRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareXRegular(props: LanSquareXRegularProps): React.ReactElement;
export default LanSquareXRegular;
