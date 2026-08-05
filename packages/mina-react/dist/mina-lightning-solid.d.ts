import React from 'react';

export interface MinaLightningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLightningSolid(props: MinaLightningSolidProps): React.ReactElement;
export default MinaLightningSolid;
