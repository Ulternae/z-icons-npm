import React from 'react';

export interface LanSquareLariRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLariRegular: React.FC<LanSquareLariRegularProps>;
export default LanSquareLariRegular;
