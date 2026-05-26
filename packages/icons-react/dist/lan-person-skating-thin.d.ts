import React from 'react';

export interface LanPersonSkatingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSkatingThin: React.FC<LanPersonSkatingThinProps>;
export default LanPersonSkatingThin;
