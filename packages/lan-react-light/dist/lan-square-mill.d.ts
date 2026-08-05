import React from 'react';

export interface LanSquareMillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareMill(props: LanSquareMillProps): React.ReactElement;
export default LanSquareMill;
