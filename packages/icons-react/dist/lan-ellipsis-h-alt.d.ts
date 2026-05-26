import React from 'react';

export interface LanEllipsisHAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEllipsisHAlt: React.FC<LanEllipsisHAltProps>;
export default LanEllipsisHAlt;
