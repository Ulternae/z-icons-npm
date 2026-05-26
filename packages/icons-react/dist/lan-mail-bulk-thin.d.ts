import React from 'react';

export interface LanMailBulkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailBulkThin: React.FC<LanMailBulkThinProps>;
export default LanMailBulkThin;
