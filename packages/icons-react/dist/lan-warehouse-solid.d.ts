import React from 'react';

export interface LanWarehouseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWarehouseSolid: React.FC<LanWarehouseSolidProps>;
export default LanWarehouseSolid;
