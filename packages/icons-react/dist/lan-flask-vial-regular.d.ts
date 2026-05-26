import React from 'react';

export interface LanFlaskVialRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskVialRegular: React.FC<LanFlaskVialRegularProps>;
export default LanFlaskVialRegular;
