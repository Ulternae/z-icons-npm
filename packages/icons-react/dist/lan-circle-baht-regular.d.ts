import React from 'react';

export interface LanCircleBahtRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBahtRegular: React.FC<LanCircleBahtRegularProps>;
export default LanCircleBahtRegular;
