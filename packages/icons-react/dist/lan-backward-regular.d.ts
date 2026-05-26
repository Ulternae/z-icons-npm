import React from 'react';

export interface LanBackwardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackwardRegular: React.FC<LanBackwardRegularProps>;
export default LanBackwardRegular;
