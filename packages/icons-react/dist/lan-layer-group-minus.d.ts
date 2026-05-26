import React from 'react';

export interface LanLayerGroupMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerGroupMinus: React.FC<LanLayerGroupMinusProps>;
export default LanLayerGroupMinus;
