import React from 'react';

export interface LanBlenderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlender: React.FC<LanBlenderProps>;
export default LanBlender;
