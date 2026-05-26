import React from 'react';

export interface LanFaceDottedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDottedThin: React.FC<LanFaceDottedThinProps>;
export default LanFaceDottedThin;
