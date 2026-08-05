import React from 'react';

export interface LanSquareRingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRingRegular(props: LanSquareRingRegularProps): React.ReactElement;
export default LanSquareRingRegular;
