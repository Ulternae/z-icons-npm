import React from 'react';

export interface LanArrowPointerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowPointerSolid(props: LanArrowPointerSolidProps): React.ReactElement;
export default LanArrowPointerSolid;
