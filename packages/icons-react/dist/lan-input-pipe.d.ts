import React from 'react';

export interface LanInputPipeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputPipe: React.FC<LanInputPipeProps>;
export default LanInputPipe;
