import React from 'react';

export interface MinaSnowflakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSnowflakeSolid(props: MinaSnowflakeSolidProps): React.ReactElement;
export default MinaSnowflakeSolid;
