import React from 'react';

export interface LanLayerGroupPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerGroupPlus: React.FC<LanLayerGroupPlusProps>;
export default LanLayerGroupPlus;
