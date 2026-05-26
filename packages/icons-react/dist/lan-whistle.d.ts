import React from 'react';

export interface LanWhistleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWhistle: React.FC<LanWhistleProps>;
export default LanWhistle;
