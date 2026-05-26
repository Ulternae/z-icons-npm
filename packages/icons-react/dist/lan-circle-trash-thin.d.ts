import React from 'react';

export interface LanCircleTrashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTrashThin: React.FC<LanCircleTrashThinProps>;
export default LanCircleTrashThin;
