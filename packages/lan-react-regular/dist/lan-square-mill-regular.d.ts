import React from 'react';

export interface LanSquareMillRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareMillRegular(props: LanSquareMillRegularProps): React.ReactElement;
export default LanSquareMillRegular;
