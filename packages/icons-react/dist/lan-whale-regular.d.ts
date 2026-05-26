import React from 'react';

export interface LanWhaleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWhaleRegular: React.FC<LanWhaleRegularProps>;
export default LanWhaleRegular;
