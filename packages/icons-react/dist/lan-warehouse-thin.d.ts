import React from 'react';

export interface LanWarehouseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWarehouseThin: React.FC<LanWarehouseThinProps>;
export default LanWarehouseThin;
