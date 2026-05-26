import React from 'react';

export interface LanCakeSliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCakeSliceThin: React.FC<LanCakeSliceThinProps>;
export default LanCakeSliceThin;
