import React from 'react';

export interface LanSquareVRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareVRegular(props: LanSquareVRegularProps): React.ReactElement;
export default LanSquareVRegular;
