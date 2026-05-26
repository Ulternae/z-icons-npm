import React from 'react';

export interface LanShipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShipThin: React.FC<LanShipThinProps>;
export default LanShipThin;
