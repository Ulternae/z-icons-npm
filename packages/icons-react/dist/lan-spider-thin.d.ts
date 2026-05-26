import React from 'react';

export interface LanSpiderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpiderThin: React.FC<LanSpiderThinProps>;
export default LanSpiderThin;
