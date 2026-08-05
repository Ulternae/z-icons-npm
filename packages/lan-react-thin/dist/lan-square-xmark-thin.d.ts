import React from 'react';

export interface LanSquareXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareXmarkThin(props: LanSquareXmarkThinProps): React.ReactElement;
export default LanSquareXmarkThin;
