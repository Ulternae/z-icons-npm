import React from 'react';

export interface LanFireExtinguisherThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireExtinguisherThin: React.FC<LanFireExtinguisherThinProps>;
export default LanFireExtinguisherThin;
