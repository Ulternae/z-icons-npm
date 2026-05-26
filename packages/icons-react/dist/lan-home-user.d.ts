import React from 'react';

export interface LanHomeUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeUser: React.FC<LanHomeUserProps>;
export default LanHomeUser;
