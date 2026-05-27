import React from 'react';

export interface CoreMapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMap: React.FC<CoreMapProps>;
export default CoreMap;
