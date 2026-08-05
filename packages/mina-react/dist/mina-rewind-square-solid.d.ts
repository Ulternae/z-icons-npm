import React from 'react';

export interface MinaRewindSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindSquareSolid(props: MinaRewindSquareSolidProps): React.ReactElement;
export default MinaRewindSquareSolid;
