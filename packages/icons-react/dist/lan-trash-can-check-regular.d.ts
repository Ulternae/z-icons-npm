import React from 'react';

export interface LanTrashCanCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanCheckRegular: React.FC<LanTrashCanCheckRegularProps>;
export default LanTrashCanCheckRegular;
