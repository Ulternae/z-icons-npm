import React from 'react';

export interface LanWindowCloseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowCloseThin: React.FC<LanWindowCloseThinProps>;
export default LanWindowCloseThin;
