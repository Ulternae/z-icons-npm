import React from 'react';

export interface LanShredderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShredderRegular: React.FC<LanShredderRegularProps>;
export default LanShredderRegular;
