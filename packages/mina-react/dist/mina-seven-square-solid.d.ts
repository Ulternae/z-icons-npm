import React from 'react';

export interface MinaSevenSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenSquareSolid(props: MinaSevenSquareSolidProps): React.ReactElement;
export default MinaSevenSquareSolid;
