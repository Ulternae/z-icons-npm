import React from 'react';

export interface LanCircleTugrikRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTugrikRegular: React.FC<LanCircleTugrikRegularProps>;
export default LanCircleTugrikRegular;
