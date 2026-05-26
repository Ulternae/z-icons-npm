import React from 'react';

export interface LanCirclePesoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePesoRegular: React.FC<LanCirclePesoRegularProps>;
export default LanCirclePesoRegular;
