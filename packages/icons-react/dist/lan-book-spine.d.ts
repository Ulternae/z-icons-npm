import React from 'react';

export interface LanBookSpineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookSpine: React.FC<LanBookSpineProps>;
export default LanBookSpine;
