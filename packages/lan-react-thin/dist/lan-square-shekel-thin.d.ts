import React from 'react';

export interface LanSquareShekelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareShekelThin(props: LanSquareShekelThinProps): React.ReactElement;
export default LanSquareShekelThin;
