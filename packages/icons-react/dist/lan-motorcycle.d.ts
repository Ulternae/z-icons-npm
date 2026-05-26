import React from 'react';

export interface LanMotorcycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMotorcycle: React.FC<LanMotorcycleProps>;
export default LanMotorcycle;
