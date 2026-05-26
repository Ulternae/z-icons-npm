import React from 'react';

export interface LanBookTanakhThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookTanakhThin: React.FC<LanBookTanakhThinProps>;
export default LanBookTanakhThin;
