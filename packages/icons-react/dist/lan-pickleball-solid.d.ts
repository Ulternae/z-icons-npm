import React from 'react';

export interface LanPickleballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPickleballSolid: React.FC<LanPickleballSolidProps>;
export default LanPickleballSolid;
