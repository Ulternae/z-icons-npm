import React from 'react';

export interface LanCircle5RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle5Regular: React.FC<LanCircle5RegularProps>;
export default LanCircle5Regular;
