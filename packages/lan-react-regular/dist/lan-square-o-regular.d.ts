import React from 'react';

export interface LanSquareORegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareORegular(props: LanSquareORegularProps): React.ReactElement;
export default LanSquareORegular;
