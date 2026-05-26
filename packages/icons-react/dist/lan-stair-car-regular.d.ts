import React from 'react';

export interface LanStairCarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStairCarRegular: React.FC<LanStairCarRegularProps>;
export default LanStairCarRegular;
