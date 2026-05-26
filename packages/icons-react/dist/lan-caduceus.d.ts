import React from 'react';

export interface LanCaduceusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaduceus: React.FC<LanCaduceusProps>;
export default LanCaduceus;
