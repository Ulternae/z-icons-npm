import React from 'react';

export interface LanTentCircusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTentCircusThin: React.FC<LanTentCircusThinProps>;
export default LanTentCircusThin;
