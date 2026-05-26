import React from 'react';

export interface LanDoNotEnterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoNotEnter: React.FC<LanDoNotEnterProps>;
export default LanDoNotEnter;
