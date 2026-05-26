import React from 'react';

export interface LanTreeDecoratedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeDecorated: React.FC<LanTreeDecoratedProps>;
export default LanTreeDecorated;
