import React from 'react';

export interface LanPersonHikingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonHiking: React.FC<LanPersonHikingProps>;
export default LanPersonHiking;
