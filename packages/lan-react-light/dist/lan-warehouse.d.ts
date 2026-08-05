import React from 'react';

export interface LanWarehouseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWarehouse(props: LanWarehouseProps): React.ReactElement;
export default LanWarehouse;
