import React from 'react';

export interface LanKiteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKiteThin: React.FC<LanKiteThinProps>;
export default LanKiteThin;
