import React from 'react';

export interface LanSquareEurozoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEurozoneRegular(props: LanSquareEurozoneRegularProps): React.ReactElement;
export default LanSquareEurozoneRegular;
