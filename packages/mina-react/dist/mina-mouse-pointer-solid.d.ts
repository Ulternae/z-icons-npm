import React from 'react';

export interface MinaMousePointerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMousePointerSolid(props: MinaMousePointerSolidProps): React.ReactElement;
export default MinaMousePointerSolid;
