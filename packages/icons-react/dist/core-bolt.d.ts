import React from 'react';

export interface CoreBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBolt: React.FC<CoreBoltProps>;
export default CoreBolt;
