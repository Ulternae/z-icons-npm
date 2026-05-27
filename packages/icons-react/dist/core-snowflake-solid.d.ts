import React from 'react';

export interface CoreSnowflakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSnowflakeSolid: React.FC<CoreSnowflakeSolidProps>;
export default CoreSnowflakeSolid;
