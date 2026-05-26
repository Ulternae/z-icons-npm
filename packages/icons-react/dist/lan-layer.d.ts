import React from 'react';

export interface LanLayerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayer: React.FC<LanLayerProps>;
export default LanLayer;
