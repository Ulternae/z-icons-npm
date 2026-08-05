import React from 'react';

export interface LanSquareEqualsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEqualsRegular(props: LanSquareEqualsRegularProps): React.ReactElement;
export default LanSquareEqualsRegular;
