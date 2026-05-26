import React from 'react';

export interface LanDinosaurRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDinosaurRegular: React.FC<LanDinosaurRegularProps>;
export default LanDinosaurRegular;
