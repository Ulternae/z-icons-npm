import React from 'react';

export interface LanCircleCruzeiroRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCruzeiroRegular: React.FC<LanCircleCruzeiroRegularProps>;
export default LanCircleCruzeiroRegular;
