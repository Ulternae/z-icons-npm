import React from 'react';

export interface LanHandsBoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsBound: React.FC<LanHandsBoundProps>;
export default LanHandsBound;
