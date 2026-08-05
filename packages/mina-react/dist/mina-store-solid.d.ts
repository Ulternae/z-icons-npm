import React from 'react';

export interface MinaStoreSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStoreSolid(props: MinaStoreSolidProps): React.ReactElement;
export default MinaStoreSolid;
