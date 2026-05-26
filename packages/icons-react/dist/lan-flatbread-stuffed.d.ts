import React from 'react';

export interface LanFlatbreadStuffedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlatbreadStuffed: React.FC<LanFlatbreadStuffedProps>;
export default LanFlatbreadStuffed;
