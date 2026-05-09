import React from 'react';

export interface MinaSnowflakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSnowflakeSolid: React.FC<MinaSnowflakeSolidProps>;
export default MinaSnowflakeSolid;
