import React from 'react';

export interface LanWindowRestoreThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowRestoreThin: React.FC<LanWindowRestoreThinProps>;
export default LanWindowRestoreThin;
