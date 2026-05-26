import React from 'react';

export interface LanSignal3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal3: React.FC<LanSignal3Props>;
export default LanSignal3;
