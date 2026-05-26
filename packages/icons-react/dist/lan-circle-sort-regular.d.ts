import React from 'react';

export interface LanCircleSortRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSortRegular: React.FC<LanCircleSortRegularProps>;
export default LanCircleSortRegular;
