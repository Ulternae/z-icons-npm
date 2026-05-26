import React from 'react';

export interface LanEjectThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEjectThin: React.FC<LanEjectThinProps>;
export default LanEjectThin;
