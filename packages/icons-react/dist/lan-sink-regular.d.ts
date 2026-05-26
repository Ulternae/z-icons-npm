import React from 'react';

export interface LanSinkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSinkRegular: React.FC<LanSinkRegularProps>;
export default LanSinkRegular;
