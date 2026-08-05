import React from 'react';

export interface LanSquareWonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareWonRegular(props: LanSquareWonRegularProps): React.ReactElement;
export default LanSquareWonRegular;
