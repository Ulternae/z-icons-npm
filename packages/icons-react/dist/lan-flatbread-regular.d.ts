import React from 'react';

export interface LanFlatbreadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlatbreadRegular: React.FC<LanFlatbreadRegularProps>;
export default LanFlatbreadRegular;
