import React from 'react';

export interface LanSignal3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal3Regular: React.FC<LanSignal3RegularProps>;
export default LanSignal3Regular;
