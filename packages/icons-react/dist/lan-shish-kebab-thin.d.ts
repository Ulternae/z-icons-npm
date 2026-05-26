import React from 'react';

export interface LanShishKebabThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShishKebabThin: React.FC<LanShishKebabThinProps>;
export default LanShishKebabThin;
