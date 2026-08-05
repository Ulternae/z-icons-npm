import React from 'react';

export interface LanSquareListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareListThin(props: LanSquareListThinProps): React.ReactElement;
export default LanSquareListThin;
