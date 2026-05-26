import React from 'react';

export interface LanMemoryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoryRegular: React.FC<LanMemoryRegularProps>;
export default LanMemoryRegular;
