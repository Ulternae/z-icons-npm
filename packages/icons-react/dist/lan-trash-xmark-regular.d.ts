import React from 'react';

export interface LanTrashXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashXmarkRegular: React.FC<LanTrashXmarkRegularProps>;
export default LanTrashXmarkRegular;
