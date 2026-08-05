import React from 'react';

export interface LanApostropheSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanApostropheSolid(props: LanApostropheSolidProps): React.ReactElement;
export default LanApostropheSolid;
