import React from 'react';

export interface LanEllipsisHAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEllipsisHAltThin: React.FC<LanEllipsisHAltThinProps>;
export default LanEllipsisHAltThin;
