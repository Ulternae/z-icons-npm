import React from 'react';

export interface MinaWindsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWindsSolid(props: MinaWindsSolidProps): React.ReactElement;
export default MinaWindsSolid;
