import React from 'react';

export interface LanSquareQRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareQRegular(props: LanSquareQRegularProps): React.ReactElement;
export default LanSquareQRegular;
