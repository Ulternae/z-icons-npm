import React from 'react';

export interface CoreFileCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFileCheck: React.FC<CoreFileCheckProps>;
export default CoreFileCheck;
