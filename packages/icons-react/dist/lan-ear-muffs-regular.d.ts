import React from 'react';

export interface LanEarMuffsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarMuffsRegular: React.FC<LanEarMuffsRegularProps>;
export default LanEarMuffsRegular;
