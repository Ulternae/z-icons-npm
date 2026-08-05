import React from 'react';

export interface MinaPauseSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseSquareSolid(props: MinaPauseSquareSolidProps): React.ReactElement;
export default MinaPauseSquareSolid;
