import React from 'react';

export interface LanFeatherThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFeatherThin: React.FC<LanFeatherThinProps>;
export default LanFeatherThin;
