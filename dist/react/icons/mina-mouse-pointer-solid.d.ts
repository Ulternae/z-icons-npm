import React from 'react';

export interface MinaMousePointerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMousePointerSolid: React.FC<MinaMousePointerSolidProps>;
export default MinaMousePointerSolid;
