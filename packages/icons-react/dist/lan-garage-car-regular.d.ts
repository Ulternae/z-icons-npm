import React from 'react';

export interface LanGarageCarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageCarRegular: React.FC<LanGarageCarRegularProps>;
export default LanGarageCarRegular;
