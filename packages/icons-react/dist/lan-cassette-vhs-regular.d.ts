import React from 'react';

export interface LanCassetteVhsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCassetteVhsRegular: React.FC<LanCassetteVhsRegularProps>;
export default LanCassetteVhsRegular;
