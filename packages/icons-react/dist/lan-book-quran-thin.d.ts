import React from 'react';

export interface LanBookQuranThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookQuranThin: React.FC<LanBookQuranThinProps>;
export default LanBookQuranThin;
