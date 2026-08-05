import React from 'react';

export interface MinaPercentageSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPercentageSquareSolid(props: MinaPercentageSquareSolidProps): React.ReactElement;
export default MinaPercentageSquareSolid;
