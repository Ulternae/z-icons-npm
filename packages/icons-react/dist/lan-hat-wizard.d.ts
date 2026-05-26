import React from 'react';

export interface LanHatWizardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatWizard: React.FC<LanHatWizardProps>;
export default LanHatWizard;
