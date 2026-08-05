import React from 'react';

export interface LanSquareNRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareNRegular(props: LanSquareNRegularProps): React.ReactElement;
export default LanSquareNRegular;
