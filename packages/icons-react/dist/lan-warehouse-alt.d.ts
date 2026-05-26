import React from 'react';

export interface LanWarehouseAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWarehouseAlt: React.FC<LanWarehouseAltProps>;
export default LanWarehouseAlt;
