import React from 'react';

export interface LanImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageSolid(props: LanImageSolidProps): React.ReactElement;
export default LanImageSolid;
