import React from 'react';

export interface LanVolcanoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolcano: React.FC<LanVolcanoProps>;
export default LanVolcano;
