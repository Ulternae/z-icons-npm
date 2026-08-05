import React from 'react';

export interface LanPinataSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPinataSolid(props: LanPinataSolidProps): React.ReactElement;
export default LanPinataSolid;
