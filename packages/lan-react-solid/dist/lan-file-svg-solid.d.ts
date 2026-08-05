import React from 'react';

export interface LanFileSvgSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSvgSolid(props: LanFileSvgSolidProps): React.ReactElement;
export default LanFileSvgSolid;
