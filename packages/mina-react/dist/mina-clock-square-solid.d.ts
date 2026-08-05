import React from 'react';

export interface MinaClockSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockSquareSolid(props: MinaClockSquareSolidProps): React.ReactElement;
export default MinaClockSquareSolid;
