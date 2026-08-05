import React from 'react';

export interface LanGlobePointerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobePointerSolid(props: LanGlobePointerSolidProps): React.ReactElement;
export default LanGlobePointerSolid;
