import React from 'react';

export interface LanCloverRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloverRegular: React.FC<LanCloverRegularProps>;
export default LanCloverRegular;
