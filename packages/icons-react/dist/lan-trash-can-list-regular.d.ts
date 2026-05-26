import React from 'react';

export interface LanTrashCanListRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanListRegular: React.FC<LanTrashCanListRegularProps>;
export default LanTrashCanListRegular;
