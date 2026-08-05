import React from 'react';

export interface MinaStopSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopSquareSolid(props: MinaStopSquareSolidProps): React.ReactElement;
export default MinaStopSquareSolid;
