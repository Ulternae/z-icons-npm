import React from 'react';

export interface LanFaceSadSweatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSadSweat: React.FC<LanFaceSadSweatProps>;
export default LanFaceSadSweat;
