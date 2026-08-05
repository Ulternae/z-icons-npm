import React from 'react';

export interface MinaWineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWineSolid(props: MinaWineSolidProps): React.ReactElement;
export default MinaWineSolid;
