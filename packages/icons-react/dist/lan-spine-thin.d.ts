import React from 'react';

export interface LanSpineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpineThin: React.FC<LanSpineThinProps>;
export default LanSpineThin;
