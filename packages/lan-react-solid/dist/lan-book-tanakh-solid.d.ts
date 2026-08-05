import React from 'react';

export interface LanBookTanakhSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookTanakhSolid(props: LanBookTanakhSolidProps): React.ReactElement;
export default LanBookTanakhSolid;
