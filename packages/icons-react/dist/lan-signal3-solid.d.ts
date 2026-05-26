import React from 'react';

export interface LanSignal3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal3Solid: React.FC<LanSignal3SolidProps>;
export default LanSignal3Solid;
