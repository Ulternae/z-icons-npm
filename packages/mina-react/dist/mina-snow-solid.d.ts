import React from 'react';

export interface MinaSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSnowSolid(props: MinaSnowSolidProps): React.ReactElement;
export default MinaSnowSolid;
