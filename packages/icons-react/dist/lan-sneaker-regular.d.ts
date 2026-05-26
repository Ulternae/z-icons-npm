import React from 'react';

export interface LanSneakerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSneakerRegular: React.FC<LanSneakerRegularProps>;
export default LanSneakerRegular;
