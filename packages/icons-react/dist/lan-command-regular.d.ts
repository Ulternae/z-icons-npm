import React from 'react';

export interface LanCommandRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommandRegular: React.FC<LanCommandRegularProps>;
export default LanCommandRegular;
