import React from 'react';

export interface LanTreeDecoratedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeDecoratedThin: React.FC<LanTreeDecoratedThinProps>;
export default LanTreeDecoratedThin;
