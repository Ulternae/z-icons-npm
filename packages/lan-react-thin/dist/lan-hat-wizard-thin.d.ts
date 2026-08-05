import React from 'react';

export interface LanHatWizardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatWizardThin(props: LanHatWizardThinProps): React.ReactElement;
export default LanHatWizardThin;
