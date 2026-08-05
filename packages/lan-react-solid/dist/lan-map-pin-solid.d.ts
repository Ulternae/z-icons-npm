import React from 'react';

export interface LanMapPinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapPinSolid(props: LanMapPinSolidProps): React.ReactElement;
export default LanMapPinSolid;
