import React from 'react';

export interface LanFlaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskRegular: React.FC<LanFlaskRegularProps>;
export default LanFlaskRegular;
