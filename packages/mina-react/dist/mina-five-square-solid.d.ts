import React from 'react';

export interface MinaFiveSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveSquareSolid(props: MinaFiveSquareSolidProps): React.ReactElement;
export default MinaFiveSquareSolid;
