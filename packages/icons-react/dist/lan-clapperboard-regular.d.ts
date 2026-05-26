import React from 'react';

export interface LanClapperboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClapperboardRegular: React.FC<LanClapperboardRegularProps>;
export default LanClapperboardRegular;
