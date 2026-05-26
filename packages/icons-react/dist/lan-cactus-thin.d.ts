import React from 'react';

export interface LanCactusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCactusThin: React.FC<LanCactusThinProps>;
export default LanCactusThin;
