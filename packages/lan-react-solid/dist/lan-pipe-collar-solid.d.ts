import React from 'react';

export interface LanPipeCollarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeCollarSolid(props: LanPipeCollarSolidProps): React.ReactElement;
export default LanPipeCollarSolid;
