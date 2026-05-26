import React from 'react';

export interface LanIndentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIndentRegular: React.FC<LanIndentRegularProps>;
export default LanIndentRegular;
