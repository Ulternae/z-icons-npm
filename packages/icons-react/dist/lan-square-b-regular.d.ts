import React from 'react';

export interface LanSquareBRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBRegular: React.FC<LanSquareBRegularProps>;
export default LanSquareBRegular;
