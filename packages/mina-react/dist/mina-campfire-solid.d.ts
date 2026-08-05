import React from 'react';

export interface MinaCampfireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCampfireSolid(props: MinaCampfireSolidProps): React.ReactElement;
export default MinaCampfireSolid;
