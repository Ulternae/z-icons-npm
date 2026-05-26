import React from 'react';

export interface LanGarageCarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageCarThin: React.FC<LanGarageCarThinProps>;
export default LanGarageCarThin;
