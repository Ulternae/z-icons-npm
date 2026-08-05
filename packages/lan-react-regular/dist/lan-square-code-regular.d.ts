import React from 'react';

export interface LanSquareCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCodeRegular(props: LanSquareCodeRegularProps): React.ReactElement;
export default LanSquareCodeRegular;
