import React from 'react';

export interface CoreFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFlag: React.FC<CoreFlagProps>;
export default CoreFlag;
