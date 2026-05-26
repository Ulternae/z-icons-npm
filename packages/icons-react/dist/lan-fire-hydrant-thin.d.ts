import React from 'react';

export interface LanFireHydrantThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireHydrantThin: React.FC<LanFireHydrantThinProps>;
export default LanFireHydrantThin;
