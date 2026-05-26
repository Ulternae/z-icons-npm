import React from 'react';

export interface LanCircleLariThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLariThin: React.FC<LanCircleLariThinProps>;
export default LanCircleLariThin;
