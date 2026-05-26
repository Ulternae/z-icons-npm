import React from 'react';

export interface LanPersonThroughWindowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonThroughWindow: React.FC<LanPersonThroughWindowProps>;
export default LanPersonThroughWindow;
