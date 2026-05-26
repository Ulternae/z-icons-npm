import React from 'react';

export interface LanFireExtinguisherSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireExtinguisherSolid: React.FC<LanFireExtinguisherSolidProps>;
export default LanFireExtinguisherSolid;
