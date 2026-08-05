import React from 'react';

export interface MinaWindSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWindSolid(props: MinaWindSolidProps): React.ReactElement;
export default MinaWindSolid;
