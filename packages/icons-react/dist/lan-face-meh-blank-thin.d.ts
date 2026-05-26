import React from 'react';

export interface LanFaceMehBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMehBlankThin: React.FC<LanFaceMehBlankThinProps>;
export default LanFaceMehBlankThin;
