import React from 'react';

export interface LanLeafMapleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafMapleThin: React.FC<LanLeafMapleThinProps>;
export default LanLeafMapleThin;
