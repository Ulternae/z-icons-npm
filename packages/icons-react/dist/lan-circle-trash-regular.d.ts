import React from 'react';

export interface LanCircleTrashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTrashRegular: React.FC<LanCircleTrashRegularProps>;
export default LanCircleTrashRegular;
