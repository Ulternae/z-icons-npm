import React from 'react';

export interface LanScreencastThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScreencastThin: React.FC<LanScreencastThinProps>;
export default LanScreencastThin;
