import React from 'react';

export interface LanBarProgressEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressEmptySolid: React.FC<LanBarProgressEmptySolidProps>;
export default LanBarProgressEmptySolid;
