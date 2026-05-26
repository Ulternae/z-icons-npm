import React from 'react';

export interface LanBookSpineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookSpineThin: React.FC<LanBookSpineThinProps>;
export default LanBookSpineThin;
