import React from 'react';

export interface LanBullseyePointerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullseyePointerSolid(props: LanBullseyePointerSolidProps): React.ReactElement;
export default LanBullseyePointerSolid;
