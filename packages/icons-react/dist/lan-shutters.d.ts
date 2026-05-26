import React from 'react';

export interface LanShuttersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShutters: React.FC<LanShuttersProps>;
export default LanShutters;
