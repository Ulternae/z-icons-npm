import React from 'react';

export interface LanSpiderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpiderRegular: React.FC<LanSpiderRegularProps>;
export default LanSpiderRegular;
