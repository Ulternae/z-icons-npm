import React from 'react';

export interface LanTurntableProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurntable: React.FC<LanTurntableProps>;
export default LanTurntable;
