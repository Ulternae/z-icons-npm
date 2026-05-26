import React from 'react';

export interface LanToothbrushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToothbrush: React.FC<LanToothbrushProps>;
export default LanToothbrush;
