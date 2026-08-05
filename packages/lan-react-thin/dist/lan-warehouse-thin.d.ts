import React from 'react';

export interface LanWarehouseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWarehouseThin(props: LanWarehouseThinProps): React.ReactElement;
export default LanWarehouseThin;
