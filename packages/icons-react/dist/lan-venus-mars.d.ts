import React from 'react';

export interface LanVenusMarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVenusMars: React.FC<LanVenusMarsProps>;
export default LanVenusMars;
