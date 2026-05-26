import React from 'react';

export interface LanRestroomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRestroom: React.FC<LanRestroomProps>;
export default LanRestroom;
