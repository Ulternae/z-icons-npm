import React from 'react';

export interface LanHippoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHippoThin: React.FC<LanHippoThinProps>;
export default LanHippoThin;
