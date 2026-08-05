import React from 'react';

export interface MinaAnnoyedSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAnnoyedSquareSolid(props: MinaAnnoyedSquareSolidProps): React.ReactElement;
export default MinaAnnoyedSquareSolid;
