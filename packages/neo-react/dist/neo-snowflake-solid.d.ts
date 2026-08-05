import React from 'react';

export interface NeoSnowflakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSnowflakeSolid(props: NeoSnowflakeSolidProps): React.ReactElement;
export default NeoSnowflakeSolid;
