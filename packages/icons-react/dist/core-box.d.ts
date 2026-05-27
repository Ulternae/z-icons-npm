import React from 'react';

export interface CoreBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBox: React.FC<CoreBoxProps>;
export default CoreBox;
