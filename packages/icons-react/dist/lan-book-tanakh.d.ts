import React from 'react';

export interface LanBookTanakhProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookTanakh: React.FC<LanBookTanakhProps>;
export default LanBookTanakh;
