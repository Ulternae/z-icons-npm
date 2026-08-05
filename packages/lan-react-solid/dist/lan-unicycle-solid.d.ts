import React from 'react';

export interface LanUnicycleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnicycleSolid(props: LanUnicycleSolidProps): React.ReactElement;
export default LanUnicycleSolid;
