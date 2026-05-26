import React from 'react';

export interface LanLycheeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLycheeThin: React.FC<LanLycheeThinProps>;
export default LanLycheeThin;
