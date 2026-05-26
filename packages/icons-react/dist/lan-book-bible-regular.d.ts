import React from 'react';

export interface LanBookBibleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookBibleRegular: React.FC<LanBookBibleRegularProps>;
export default LanBookBibleRegular;
