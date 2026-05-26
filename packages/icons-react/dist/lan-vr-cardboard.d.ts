import React from 'react';

export interface LanVrCardboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVrCardboard: React.FC<LanVrCardboardProps>;
export default LanVrCardboard;
