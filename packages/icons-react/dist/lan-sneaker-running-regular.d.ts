import React from 'react';

export interface LanSneakerRunningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSneakerRunningRegular: React.FC<LanSneakerRunningRegularProps>;
export default LanSneakerRunningRegular;
