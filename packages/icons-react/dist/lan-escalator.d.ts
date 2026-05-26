import React from 'react';

export interface LanEscalatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEscalator: React.FC<LanEscalatorProps>;
export default LanEscalator;
