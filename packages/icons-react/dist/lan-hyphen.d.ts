import React from 'react';

export interface LanHyphenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHyphen: React.FC<LanHyphenProps>;
export default LanHyphen;
