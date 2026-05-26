import React from 'react';

export interface LanCircleSortUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSortUp: React.FC<LanCircleSortUpProps>;
export default LanCircleSortUp;
