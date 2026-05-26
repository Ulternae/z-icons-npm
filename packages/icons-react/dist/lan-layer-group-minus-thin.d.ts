import React from 'react';

export interface LanLayerGroupMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerGroupMinusThin: React.FC<LanLayerGroupMinusThinProps>;
export default LanLayerGroupMinusThin;
