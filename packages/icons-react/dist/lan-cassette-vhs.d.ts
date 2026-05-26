import React from 'react';

export interface LanCassetteVhsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCassetteVhs: React.FC<LanCassetteVhsProps>;
export default LanCassetteVhs;
