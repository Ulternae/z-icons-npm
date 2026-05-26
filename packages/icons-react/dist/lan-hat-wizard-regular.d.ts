import React from 'react';

export interface LanHatWizardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatWizardRegular: React.FC<LanHatWizardRegularProps>;
export default LanHatWizardRegular;
