import React from 'react';

export interface LanMailBulkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailBulk: React.FC<LanMailBulkProps>;
export default LanMailBulk;
