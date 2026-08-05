import React from 'react';

export interface LanSquareFullRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFullRegular(props: LanSquareFullRegularProps): React.ReactElement;
export default LanSquareFullRegular;
