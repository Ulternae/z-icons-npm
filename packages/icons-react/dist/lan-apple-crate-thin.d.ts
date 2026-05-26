import React from 'react';

export interface LanAppleCrateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAppleCrateThin: React.FC<LanAppleCrateThinProps>;
export default LanAppleCrateThin;
