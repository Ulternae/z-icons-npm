import React from 'react';

export interface LanPageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPageRegular: React.FC<LanPageRegularProps>;
export default LanPageRegular;
