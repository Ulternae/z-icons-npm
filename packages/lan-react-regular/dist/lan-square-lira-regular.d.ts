import React from 'react';

export interface LanSquareLiraRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLiraRegular(props: LanSquareLiraRegularProps): React.ReactElement;
export default LanSquareLiraRegular;
