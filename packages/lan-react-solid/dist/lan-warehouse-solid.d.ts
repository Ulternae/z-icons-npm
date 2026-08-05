import React from 'react';

export interface LanWarehouseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWarehouseSolid(props: LanWarehouseSolidProps): React.ReactElement;
export default LanWarehouseSolid;
