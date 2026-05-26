import React from 'react';

export interface LanPersonSkatingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSkating: React.FC<LanPersonSkatingProps>;
export default LanPersonSkating;
