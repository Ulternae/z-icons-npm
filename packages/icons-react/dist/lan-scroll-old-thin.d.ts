import React from 'react';

export interface LanScrollOldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollOldThin: React.FC<LanScrollOldThinProps>;
export default LanScrollOldThin;
