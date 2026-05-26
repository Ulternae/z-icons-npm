import React from 'react';

export interface LanWormProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWorm: React.FC<LanWormProps>;
export default LanWorm;
