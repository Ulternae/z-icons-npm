import React from 'react';

export interface LanOptionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOption: React.FC<LanOptionProps>;
export default LanOption;
