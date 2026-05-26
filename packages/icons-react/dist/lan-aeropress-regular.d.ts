import React from 'react';

export interface LanAeropressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAeropressRegular: React.FC<LanAeropressRegularProps>;
export default LanAeropressRegular;
