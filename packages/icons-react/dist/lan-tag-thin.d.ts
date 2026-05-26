import React from 'react';

export interface LanTagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTagThin: React.FC<LanTagThinProps>;
export default LanTagThin;
