import React from 'react';

export interface MinaGlobeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGlobeSolid(props: MinaGlobeSolidProps): React.ReactElement;
export default MinaGlobeSolid;
