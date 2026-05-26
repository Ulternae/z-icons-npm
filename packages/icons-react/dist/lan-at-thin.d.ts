import React from 'react';

export interface LanAtThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAtThin: React.FC<LanAtThinProps>;
export default LanAtThin;
