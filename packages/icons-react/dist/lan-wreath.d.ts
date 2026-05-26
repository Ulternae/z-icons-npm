import React from 'react';

export interface LanWreathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWreath: React.FC<LanWreathProps>;
export default LanWreath;
