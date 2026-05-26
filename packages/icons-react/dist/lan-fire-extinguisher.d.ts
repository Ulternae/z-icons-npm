import React from 'react';

export interface LanFireExtinguisherProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireExtinguisher: React.FC<LanFireExtinguisherProps>;
export default LanFireExtinguisher;
