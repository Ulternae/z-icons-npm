import React from 'react';

export interface LanSquareUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareUserRegular(props: LanSquareUserRegularProps): React.ReactElement;
export default LanSquareUserRegular;
