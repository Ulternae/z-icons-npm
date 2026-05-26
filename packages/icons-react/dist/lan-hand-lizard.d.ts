import React from 'react';

export interface LanHandLizardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandLizard: React.FC<LanHandLizardProps>;
export default LanHandLizard;
