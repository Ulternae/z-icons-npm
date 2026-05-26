import React from 'react';

export interface LanEllipsisHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEllipsisH: React.FC<LanEllipsisHProps>;
export default LanEllipsisH;
