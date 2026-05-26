import React from 'react';

export interface LanCircleTrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTrash: React.FC<LanCircleTrashProps>;
export default LanCircleTrash;
