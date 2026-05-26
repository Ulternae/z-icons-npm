import React from 'react';

export interface LanMailBulkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailBulkRegular: React.FC<LanMailBulkRegularProps>;
export default LanMailBulkRegular;
