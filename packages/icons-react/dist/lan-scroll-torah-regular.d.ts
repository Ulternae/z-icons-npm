import React from 'react';

export interface LanScrollTorahRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollTorahRegular: React.FC<LanScrollTorahRegularProps>;
export default LanScrollTorahRegular;
