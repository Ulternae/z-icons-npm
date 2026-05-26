import React from 'react';

export interface LanLayerGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerGroup: React.FC<LanLayerGroupProps>;
export default LanLayerGroup;
