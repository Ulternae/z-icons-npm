import React from 'react';

export interface LanStrawberryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStrawberryRegular: React.FC<LanStrawberryRegularProps>;
export default LanStrawberryRegular;
