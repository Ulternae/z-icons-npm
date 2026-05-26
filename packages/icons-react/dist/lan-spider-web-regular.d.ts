import React from 'react';

export interface LanSpiderWebRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpiderWebRegular: React.FC<LanSpiderWebRegularProps>;
export default LanSpiderWebRegular;
