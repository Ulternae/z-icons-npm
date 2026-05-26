import React from 'react';

export interface LanH6ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH6Thin: React.FC<LanH6ThinProps>;
export default LanH6Thin;
