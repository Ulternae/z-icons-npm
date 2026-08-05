import React from 'react';

export interface LanLeoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeoSolid(props: LanLeoSolidProps): React.ReactElement;
export default LanLeoSolid;
