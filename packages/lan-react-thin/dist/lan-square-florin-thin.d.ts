import React from 'react';

export interface LanSquareFlorinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFlorinThin(props: LanSquareFlorinThinProps): React.ReactElement;
export default LanSquareFlorinThin;
