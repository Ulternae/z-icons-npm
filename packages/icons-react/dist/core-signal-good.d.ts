import React from 'react';

export interface CoreSignalGoodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSignalGood: React.FC<CoreSignalGoodProps>;
export default CoreSignalGood;
