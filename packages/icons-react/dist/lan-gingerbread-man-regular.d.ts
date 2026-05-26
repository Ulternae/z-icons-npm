import React from 'react';

export interface LanGingerbreadManRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGingerbreadManRegular: React.FC<LanGingerbreadManRegularProps>;
export default LanGingerbreadManRegular;
