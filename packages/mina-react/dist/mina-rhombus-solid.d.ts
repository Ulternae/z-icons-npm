import React from 'react';

export interface MinaRhombusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRhombusSolid(props: MinaRhombusSolidProps): React.ReactElement;
export default MinaRhombusSolid;
