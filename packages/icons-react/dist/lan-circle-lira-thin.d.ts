import React from 'react';

export interface LanCircleLiraThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLiraThin: React.FC<LanCircleLiraThinProps>;
export default LanCircleLiraThin;
