import React from 'react';

export interface LanSquareCruzeiroRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCruzeiroRegular: React.FC<LanSquareCruzeiroRegularProps>;
export default LanSquareCruzeiroRegular;
