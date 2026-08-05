import React from 'react';

export interface LanSquareYenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareYenThin(props: LanSquareYenThinProps): React.ReactElement;
export default LanSquareYenThin;
