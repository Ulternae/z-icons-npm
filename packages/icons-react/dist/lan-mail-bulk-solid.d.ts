import React from 'react';

export interface LanMailBulkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailBulkSolid: React.FC<LanMailBulkSolidProps>;
export default LanMailBulkSolid;
