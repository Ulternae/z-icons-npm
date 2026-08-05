import React from 'react';

export interface LanSquareOThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareOThin(props: LanSquareOThinProps): React.ReactElement;
export default LanSquareOThin;
