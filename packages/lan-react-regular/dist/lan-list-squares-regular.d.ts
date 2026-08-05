import React from 'react';

export interface LanListSquaresRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListSquaresRegular(props: LanListSquaresRegularProps): React.ReactElement;
export default LanListSquaresRegular;
