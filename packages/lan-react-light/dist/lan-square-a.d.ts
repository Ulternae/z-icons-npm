import React from 'react';

export interface LanSquareAProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareA(props: LanSquareAProps): React.ReactElement;
export default LanSquareA;
