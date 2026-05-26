import React from 'react';

export interface LanCircleTugrikProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTugrik: React.FC<LanCircleTugrikProps>;
export default LanCircleTugrik;
