import React from 'react';

export interface LanFireplaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireplaceThin: React.FC<LanFireplaceThinProps>;
export default LanFireplaceThin;
