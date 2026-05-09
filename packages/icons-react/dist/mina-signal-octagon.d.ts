import React from 'react';

export interface MinaSignalOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalOctagon: React.FC<MinaSignalOctagonProps>;
export default MinaSignalOctagon;
