import React from 'react';

export interface LanFacePleadingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePleadingThin: React.FC<LanFacePleadingThinProps>;
export default LanFacePleadingThin;
