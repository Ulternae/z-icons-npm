import React from 'react';

export interface LanWarehouseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWarehouse: React.FC<LanWarehouseProps>;
export default LanWarehouse;
