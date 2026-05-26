import React from 'react';

export interface LanTombstoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTombstoneSolid: React.FC<LanTombstoneSolidProps>;
export default LanTombstoneSolid;
