import React from 'react';

export interface LanEyeDropperEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeDropperEmpty: React.FC<LanEyeDropperEmptyProps>;
export default LanEyeDropperEmpty;
