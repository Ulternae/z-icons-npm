import React from 'react';

export interface CoreFileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFile: React.FC<CoreFileProps>;
export default CoreFile;
