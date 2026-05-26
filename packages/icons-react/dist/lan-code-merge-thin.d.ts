import React from 'react';

export interface LanCodeMergeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeMergeThin: React.FC<LanCodeMergeThinProps>;
export default LanCodeMergeThin;
