import React from 'react';

export interface LanEllipsisVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEllipsisVThin: React.FC<LanEllipsisVThinProps>;
export default LanEllipsisVThin;
