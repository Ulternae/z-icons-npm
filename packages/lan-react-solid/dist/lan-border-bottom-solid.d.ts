import React from 'react';

export interface LanBorderBottomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderBottomSolid(props: LanBorderBottomSolidProps): React.ReactElement;
export default LanBorderBottomSolid;
