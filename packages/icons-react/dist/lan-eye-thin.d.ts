import React from 'react';

export interface LanEyeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeThin: React.FC<LanEyeThinProps>;
export default LanEyeThin;
