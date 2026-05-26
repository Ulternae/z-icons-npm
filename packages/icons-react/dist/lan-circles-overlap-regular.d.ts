import React from 'react';

export interface LanCirclesOverlapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclesOverlapRegular: React.FC<LanCirclesOverlapRegularProps>;
export default LanCirclesOverlapRegular;
