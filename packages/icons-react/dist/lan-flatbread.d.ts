import React from 'react';

export interface LanFlatbreadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlatbread: React.FC<LanFlatbreadProps>;
export default LanFlatbread;
