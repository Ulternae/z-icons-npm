import React from 'react';

export interface LanCruzeiroSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCruzeiroSignSolid: React.FC<LanCruzeiroSignSolidProps>;
export default LanCruzeiroSignSolid;
