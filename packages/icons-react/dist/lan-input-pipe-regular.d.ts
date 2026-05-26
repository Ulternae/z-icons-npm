import React from 'react';

export interface LanInputPipeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputPipeRegular: React.FC<LanInputPipeRegularProps>;
export default LanInputPipeRegular;
