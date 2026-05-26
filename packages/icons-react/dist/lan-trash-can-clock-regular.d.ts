import React from 'react';

export interface LanTrashCanClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanClockRegular: React.FC<LanTrashCanClockRegularProps>;
export default LanTrashCanClockRegular;
