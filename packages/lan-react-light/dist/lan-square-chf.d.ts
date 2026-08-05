import React from 'react';

export interface LanSquareChfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareChf(props: LanSquareChfProps): React.ReactElement;
export default LanSquareChf;
