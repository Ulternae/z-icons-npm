import React from 'react';

export interface MinaCannabisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCannabisSolid(props: MinaCannabisSolidProps): React.ReactElement;
export default MinaCannabisSolid;
