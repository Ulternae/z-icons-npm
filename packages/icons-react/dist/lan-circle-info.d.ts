import React from 'react';

export interface LanCircleInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleInfo: React.FC<LanCircleInfoProps>;
export default LanCircleInfo;
