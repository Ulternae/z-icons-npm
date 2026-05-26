import React from 'react';

export interface LanFaceMehThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMehThin: React.FC<LanFaceMehThinProps>;
export default LanFaceMehThin;
