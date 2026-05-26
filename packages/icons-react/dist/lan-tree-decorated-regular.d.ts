import React from 'react';

export interface LanTreeDecoratedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeDecoratedRegular: React.FC<LanTreeDecoratedRegularProps>;
export default LanTreeDecoratedRegular;
