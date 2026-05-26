import React from 'react';

export interface LanCommentsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentsRegular: React.FC<LanCommentsRegularProps>;
export default LanCommentsRegular;
