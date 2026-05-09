import React from 'react';

export interface MinaSignalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignal: React.FC<MinaSignalProps>;
export default MinaSignal;
