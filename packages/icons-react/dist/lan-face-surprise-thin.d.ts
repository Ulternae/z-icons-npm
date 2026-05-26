import React from 'react';

export interface LanFaceSurpriseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSurpriseThin: React.FC<LanFaceSurpriseThinProps>;
export default LanFaceSurpriseThin;
