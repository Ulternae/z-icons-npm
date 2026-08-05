import React from 'react';

export interface LanHatWizardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatWizard(props: LanHatWizardProps): React.ReactElement;
export default LanHatWizard;
