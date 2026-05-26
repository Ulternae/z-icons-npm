import React from 'react';

export interface LanCircleFrancProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleFranc: React.FC<LanCircleFrancProps>;
export default LanCircleFranc;
