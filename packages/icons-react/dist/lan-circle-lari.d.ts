import React from 'react';

export interface LanCircleLariProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLari: React.FC<LanCircleLariProps>;
export default LanCircleLari;
