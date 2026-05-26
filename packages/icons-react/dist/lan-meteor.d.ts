import React from 'react';

export interface LanMeteorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeteor: React.FC<LanMeteorProps>;
export default LanMeteor;
