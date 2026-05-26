import React from 'react';

export interface LanEllipsisVAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEllipsisVAlt: React.FC<LanEllipsisVAltProps>;
export default LanEllipsisVAlt;
