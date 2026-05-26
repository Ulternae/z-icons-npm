import React from 'react';

export interface LanCartCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartCirclePlusThin: React.FC<LanCartCirclePlusThinProps>;
export default LanCartCirclePlusThin;
