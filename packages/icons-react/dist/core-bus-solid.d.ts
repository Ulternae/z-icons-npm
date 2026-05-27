import React from 'react';

export interface CoreBusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBusSolid: React.FC<CoreBusSolidProps>;
export default CoreBusSolid;
