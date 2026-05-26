import React from 'react';

export interface LanTrilliumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrillium: React.FC<LanTrilliumProps>;
export default LanTrillium;
