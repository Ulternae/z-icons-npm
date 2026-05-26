import React from 'react';

export interface LanTrashListRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashListRegular: React.FC<LanTrashListRegularProps>;
export default LanTrashListRegular;
