import React from 'react';

export interface LanWarehouseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWarehouseRegular(props: LanWarehouseRegularProps): React.ReactElement;
export default LanWarehouseRegular;
