import React from 'react';

export interface NeoSnowflakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSnowflakeSolid: React.FC<NeoSnowflakeSolidProps>;
export default NeoSnowflakeSolid;
