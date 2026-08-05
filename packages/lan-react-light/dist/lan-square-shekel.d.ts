import React from 'react';

export interface LanSquareShekelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareShekel(props: LanSquareShekelProps): React.ReactElement;
export default LanSquareShekel;
