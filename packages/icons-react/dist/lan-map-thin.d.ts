import React from 'react';

export interface LanMapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapThin: React.FC<LanMapThinProps>;
export default LanMapThin;
