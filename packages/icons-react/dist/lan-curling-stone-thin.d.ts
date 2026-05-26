import React from 'react';

export interface LanCurlingStoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCurlingStoneThin: React.FC<LanCurlingStoneThinProps>;
export default LanCurlingStoneThin;
