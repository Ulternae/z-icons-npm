import React from 'react';

export interface LanWarehouseAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWarehouseAlt(props: LanWarehouseAltProps): React.ReactElement;
export default LanWarehouseAlt;
