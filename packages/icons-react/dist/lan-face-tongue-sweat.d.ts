import React from 'react';

export interface LanFaceTongueSweatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceTongueSweat: React.FC<LanFaceTongueSweatProps>;
export default LanFaceTongueSweat;
