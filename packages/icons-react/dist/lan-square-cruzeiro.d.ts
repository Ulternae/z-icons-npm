import React from 'react';

export interface LanSquareCruzeiroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCruzeiro: React.FC<LanSquareCruzeiroProps>;
export default LanSquareCruzeiro;
