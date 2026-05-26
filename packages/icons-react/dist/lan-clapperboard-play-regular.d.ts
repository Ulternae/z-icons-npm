import React from 'react';

export interface LanClapperboardPlayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClapperboardPlayRegular: React.FC<LanClapperboardPlayRegularProps>;
export default LanClapperboardPlayRegular;
