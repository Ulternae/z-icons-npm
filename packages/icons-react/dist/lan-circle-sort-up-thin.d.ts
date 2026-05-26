import React from 'react';

export interface LanCircleSortUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSortUpThin: React.FC<LanCircleSortUpThinProps>;
export default LanCircleSortUpThin;
