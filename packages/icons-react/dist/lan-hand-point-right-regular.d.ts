import React from 'react';

export interface LanHandPointRightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointRightRegular: React.FC<LanHandPointRightRegularProps>;
export default LanHandPointRightRegular;
