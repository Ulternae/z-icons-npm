import React from 'react';

export interface LanMemoCircleInfoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoCircleInfoRegular: React.FC<LanMemoCircleInfoRegularProps>;
export default LanMemoCircleInfoRegular;
