import React from 'react';

export interface LanSquareChfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareChfRegular(props: LanSquareChfRegularProps): React.ReactElement;
export default LanSquareChfRegular;
