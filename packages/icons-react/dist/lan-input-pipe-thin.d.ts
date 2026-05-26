import React from 'react';

export interface LanInputPipeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputPipeThin: React.FC<LanInputPipeThinProps>;
export default LanInputPipeThin;
