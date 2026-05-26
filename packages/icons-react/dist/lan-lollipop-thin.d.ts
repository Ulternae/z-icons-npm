import React from 'react';

export interface LanLollipopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLollipopThin: React.FC<LanLollipopThinProps>;
export default LanLollipopThin;
