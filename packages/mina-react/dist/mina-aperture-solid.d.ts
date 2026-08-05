import React from 'react';

export interface MinaApertureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaApertureSolid(props: MinaApertureSolidProps): React.ReactElement;
export default MinaApertureSolid;
