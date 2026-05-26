import React from 'react';

export interface LanLayerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerThin: React.FC<LanLayerThinProps>;
export default LanLayerThin;
