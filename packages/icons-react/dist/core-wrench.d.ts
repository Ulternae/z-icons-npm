import React from 'react';

export interface CoreWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWrench: React.FC<CoreWrenchProps>;
export default CoreWrench;
