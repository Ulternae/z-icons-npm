import React from 'react';

export interface LanCircleDongThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDongThin: React.FC<LanCircleDongThinProps>;
export default LanCircleDongThin;
