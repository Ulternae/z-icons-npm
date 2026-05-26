import React from 'react';

export interface LanLayerGroupPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerGroupPlusThin: React.FC<LanLayerGroupPlusThinProps>;
export default LanLayerGroupPlusThin;
