import React from 'react';

export interface MinaComponentsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaComponentsSolid(props: MinaComponentsSolidProps): React.ReactElement;
export default MinaComponentsSolid;
