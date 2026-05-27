import React from 'react';

export interface CoreCopyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCopy: React.FC<CoreCopyProps>;
export default CoreCopy;
