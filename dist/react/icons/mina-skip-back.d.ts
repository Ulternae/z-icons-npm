import React from 'react';

export interface MinaSkipBackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSkipBack: React.FC<MinaSkipBackProps>;
export default MinaSkipBack;
