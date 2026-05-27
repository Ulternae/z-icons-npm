import React from 'react';

export interface CoreFilePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFilePlus: React.FC<CoreFilePlusProps>;
export default CoreFilePlus;
