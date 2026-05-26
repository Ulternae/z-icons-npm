import React from 'react';

export interface LanCircleCruzeiroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCruzeiroThin: React.FC<LanCircleCruzeiroThinProps>;
export default LanCircleCruzeiroThin;
