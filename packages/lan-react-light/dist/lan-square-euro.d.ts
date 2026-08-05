import React from 'react';

export interface LanSquareEuroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEuro(props: LanSquareEuroProps): React.ReactElement;
export default LanSquareEuro;
