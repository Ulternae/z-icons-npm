import React from 'react';

export interface LanSquareShekelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareShekelRegular(props: LanSquareShekelRegularProps): React.ReactElement;
export default LanSquareShekelRegular;
