import React from 'react';

export interface LanTrashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashRegular: React.FC<LanTrashRegularProps>;
export default LanTrashRegular;
