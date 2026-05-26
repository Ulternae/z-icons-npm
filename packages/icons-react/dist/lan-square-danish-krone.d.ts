import React from 'react';

export interface LanSquareDanishKroneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDanishKrone: React.FC<LanSquareDanishKroneProps>;
export default LanSquareDanishKrone;
