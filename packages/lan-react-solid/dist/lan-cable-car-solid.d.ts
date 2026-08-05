import React from 'react';

export interface LanCableCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCableCarSolid(props: LanCableCarSolidProps): React.ReactElement;
export default LanCableCarSolid;
