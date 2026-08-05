import React from 'react';

export interface MinaAeroplaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAeroplaneSolid(props: MinaAeroplaneSolidProps): React.ReactElement;
export default MinaAeroplaneSolid;
