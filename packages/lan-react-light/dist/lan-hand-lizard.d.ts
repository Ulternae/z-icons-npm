import React from 'react';

export interface LanHandLizardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandLizard(props: LanHandLizardProps): React.ReactElement;
export default LanHandLizard;
