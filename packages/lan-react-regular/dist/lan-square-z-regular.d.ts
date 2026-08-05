import React from 'react';

export interface LanSquareZRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareZRegular(props: LanSquareZRegularProps): React.ReactElement;
export default LanSquareZRegular;
