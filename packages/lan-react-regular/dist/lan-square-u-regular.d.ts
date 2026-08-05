import React from 'react';

export interface LanSquareURegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareURegular(props: LanSquareURegularProps): React.ReactElement;
export default LanSquareURegular;
