import React from 'react';

export interface MinaControllerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaControllerSolid(props: MinaControllerSolidProps): React.ReactElement;
export default MinaControllerSolid;
