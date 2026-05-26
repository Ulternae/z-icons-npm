import React from 'react';

export interface LanCableCarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCableCarThin: React.FC<LanCableCarThinProps>;
export default LanCableCarThin;
