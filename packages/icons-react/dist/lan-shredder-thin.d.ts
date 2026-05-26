import React from 'react';

export interface LanShredderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShredderThin: React.FC<LanShredderThinProps>;
export default LanShredderThin;
