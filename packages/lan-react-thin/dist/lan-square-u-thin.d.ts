import React from 'react';

export interface LanSquareUThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareUThin(props: LanSquareUThinProps): React.ReactElement;
export default LanSquareUThin;
