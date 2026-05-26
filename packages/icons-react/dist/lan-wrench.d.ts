import React from 'react';

export interface LanWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWrench: React.FC<LanWrenchProps>;
export default LanWrench;
