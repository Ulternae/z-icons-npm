import React from 'react';

export interface LanSquareChfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareChfThin(props: LanSquareChfThinProps): React.ReactElement;
export default LanSquareChfThin;
