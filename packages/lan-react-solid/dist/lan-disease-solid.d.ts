import React from 'react';

export interface LanDiseaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiseaseSolid(props: LanDiseaseSolidProps): React.ReactElement;
export default LanDiseaseSolid;
