import React from 'react';

export interface LanSquareKRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareKRegular(props: LanSquareKRegularProps): React.ReactElement;
export default LanSquareKRegular;
