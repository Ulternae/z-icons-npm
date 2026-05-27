import React from 'react';

export interface CoreScreencastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreScreencast: React.FC<CoreScreencastProps>;
export default CoreScreencast;
