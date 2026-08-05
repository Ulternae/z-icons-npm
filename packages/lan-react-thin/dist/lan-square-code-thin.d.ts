import React from 'react';

export interface LanSquareCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCodeThin(props: LanSquareCodeThinProps): React.ReactElement;
export default LanSquareCodeThin;
