import React from 'react';

export interface LanCircleCruzeiroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCruzeiro: React.FC<LanCircleCruzeiroProps>;
export default LanCircleCruzeiro;
