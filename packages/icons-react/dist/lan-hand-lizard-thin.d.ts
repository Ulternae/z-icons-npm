import React from 'react';

export interface LanHandLizardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandLizardThin: React.FC<LanHandLizardThinProps>;
export default LanHandLizardThin;
