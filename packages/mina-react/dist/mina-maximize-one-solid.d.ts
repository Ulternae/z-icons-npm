import React from 'react';

export interface MinaMaximizeOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMaximizeOneSolid(props: MinaMaximizeOneSolidProps): React.ReactElement;
export default MinaMaximizeOneSolid;
