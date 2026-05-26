import React from 'react';

export interface LanCheckCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckCircleThin: React.FC<LanCheckCircleThinProps>;
export default LanCheckCircleThin;
