import React from 'react';

export interface LanListCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListCheckThin: React.FC<LanListCheckThinProps>;
export default LanListCheckThin;
