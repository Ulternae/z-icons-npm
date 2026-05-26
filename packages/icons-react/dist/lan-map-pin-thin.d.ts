import React from 'react';

export interface LanMapPinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapPinThin: React.FC<LanMapPinThinProps>;
export default LanMapPinThin;
