import React from 'react';

export interface LanKipSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKipSignThin: React.FC<LanKipSignThinProps>;
export default LanKipSignThin;
