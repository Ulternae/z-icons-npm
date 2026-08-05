import React from 'react';

export interface LanSquareHalfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareHalfRegular(props: LanSquareHalfRegularProps): React.ReactElement;
export default LanSquareHalfRegular;
