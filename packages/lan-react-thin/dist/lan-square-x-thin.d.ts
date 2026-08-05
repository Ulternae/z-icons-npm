import React from 'react';

export interface LanSquareXThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareXThin(props: LanSquareXThinProps): React.ReactElement;
export default LanSquareXThin;
