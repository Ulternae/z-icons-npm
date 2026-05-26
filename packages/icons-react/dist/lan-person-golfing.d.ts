import React from 'react';

export interface LanPersonGolfingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonGolfing: React.FC<LanPersonGolfingProps>;
export default LanPersonGolfing;
