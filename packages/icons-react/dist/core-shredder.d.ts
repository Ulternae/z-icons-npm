import React from 'react';

export interface CoreShredderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShredder: React.FC<CoreShredderProps>;
export default CoreShredder;
