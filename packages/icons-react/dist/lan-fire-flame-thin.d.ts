import React from 'react';

export interface LanFireFlameThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireFlameThin: React.FC<LanFireFlameThinProps>;
export default LanFireFlameThin;
