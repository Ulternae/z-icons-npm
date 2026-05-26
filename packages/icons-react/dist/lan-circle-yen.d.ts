import React from 'react';

export interface LanCircleYenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleYen: React.FC<LanCircleYenProps>;
export default LanCircleYen;
