import React from 'react';

export interface LanSoftServeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSoftServeThin: React.FC<LanSoftServeThinProps>;
export default LanSoftServeThin;
