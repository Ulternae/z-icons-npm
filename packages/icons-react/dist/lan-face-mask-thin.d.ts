import React from 'react';

export interface LanFaceMaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMaskThin: React.FC<LanFaceMaskThinProps>;
export default LanFaceMaskThin;
