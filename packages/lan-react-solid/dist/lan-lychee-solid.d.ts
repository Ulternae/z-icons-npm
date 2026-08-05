import React from 'react';

export interface LanLycheeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLycheeSolid(props: LanLycheeSolidProps): React.ReactElement;
export default LanLycheeSolid;
