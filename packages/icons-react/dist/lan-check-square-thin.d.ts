import React from 'react';

export interface LanCheckSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckSquareThin: React.FC<LanCheckSquareThinProps>;
export default LanCheckSquareThin;
