import React from 'react';

export interface MinaAeroplaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAeroplane(props: MinaAeroplaneProps): React.ReactElement;
export default MinaAeroplane;
