import React from 'react';

export interface LanSquareFullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFullThin(props: LanSquareFullThinProps): React.ReactElement;
export default LanSquareFullThin;
