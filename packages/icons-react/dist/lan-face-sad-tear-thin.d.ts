import React from 'react';

export interface LanFaceSadTearThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSadTearThin: React.FC<LanFaceSadTearThinProps>;
export default LanFaceSadTearThin;
