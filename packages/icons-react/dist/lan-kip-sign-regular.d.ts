import React from 'react';

export interface LanKipSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKipSignRegular: React.FC<LanKipSignRegularProps>;
export default LanKipSignRegular;
