import React from 'react';

export interface LanSquareDashedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDashedThin(props: LanSquareDashedThinProps): React.ReactElement;
export default LanSquareDashedThin;
