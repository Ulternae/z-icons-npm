import React from 'react';

export interface LanHatWizardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatWizardThin: React.FC<LanHatWizardThinProps>;
export default LanHatWizardThin;
