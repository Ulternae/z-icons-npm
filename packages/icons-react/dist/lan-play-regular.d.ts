import React from 'react';

export interface LanPlayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlayRegular: React.FC<LanPlayRegularProps>;
export default LanPlayRegular;
