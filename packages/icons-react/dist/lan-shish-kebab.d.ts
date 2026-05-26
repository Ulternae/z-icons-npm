import React from 'react';

export interface LanShishKebabProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShishKebab: React.FC<LanShishKebabProps>;
export default LanShishKebab;
