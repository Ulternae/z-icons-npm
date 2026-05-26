import React from 'react';

export interface LanLayerGroupThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerGroupThin: React.FC<LanLayerGroupThinProps>;
export default LanLayerGroupThin;
