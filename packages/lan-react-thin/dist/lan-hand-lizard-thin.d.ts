import React from 'react';

export interface LanHandLizardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandLizardThin(props: LanHandLizardThinProps): React.ReactElement;
export default LanHandLizardThin;
