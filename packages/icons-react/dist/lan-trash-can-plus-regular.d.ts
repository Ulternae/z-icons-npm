import React from 'react';

export interface LanTrashCanPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanPlusRegular: React.FC<LanTrashCanPlusRegularProps>;
export default LanTrashCanPlusRegular;
