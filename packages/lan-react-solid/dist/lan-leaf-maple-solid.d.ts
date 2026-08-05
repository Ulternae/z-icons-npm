import React from 'react';

export interface LanLeafMapleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafMapleSolid(props: LanLeafMapleSolidProps): React.ReactElement;
export default LanLeafMapleSolid;
