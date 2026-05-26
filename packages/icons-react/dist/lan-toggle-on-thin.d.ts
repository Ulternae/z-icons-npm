import React from 'react';

export interface LanToggleOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleOnThin: React.FC<LanToggleOnThinProps>;
export default LanToggleOnThin;
