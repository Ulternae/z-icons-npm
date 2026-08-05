import React from 'react';

export interface LanElephantSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanElephantSolid(props: LanElephantSolidProps): React.ReactElement;
export default LanElephantSolid;
