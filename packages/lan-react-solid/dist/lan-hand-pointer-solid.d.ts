import React from 'react';

export interface LanHandPointerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointerSolid(props: LanHandPointerSolidProps): React.ReactElement;
export default LanHandPointerSolid;
