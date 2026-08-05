import React from 'react';

export interface LanSquareLThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLThin(props: LanSquareLThinProps): React.ReactElement;
export default LanSquareLThin;
