import React from 'react';

export interface LanPipeSmokingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeSmoking: React.FC<LanPipeSmokingProps>;
export default LanPipeSmoking;
