import React from 'react';

export interface LanGingerbreadManProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGingerbreadMan: React.FC<LanGingerbreadManProps>;
export default LanGingerbreadMan;
