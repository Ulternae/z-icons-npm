import React from 'react';

export interface LanSkullRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkullRegular: React.FC<LanSkullRegularProps>;
export default LanSkullRegular;
