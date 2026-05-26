import React from 'react';

export interface LanPlayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlayThin: React.FC<LanPlayThinProps>;
export default LanPlayThin;
