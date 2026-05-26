import React from 'react';

export interface LanToolboxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToolboxThin: React.FC<LanToolboxThinProps>;
export default LanToolboxThin;
