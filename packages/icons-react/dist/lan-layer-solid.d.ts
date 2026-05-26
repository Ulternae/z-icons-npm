import React from 'react';

export interface LanLayerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerSolid: React.FC<LanLayerSolidProps>;
export default LanLayerSolid;
