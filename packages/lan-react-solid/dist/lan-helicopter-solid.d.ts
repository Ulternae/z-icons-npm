import React from 'react';

export interface LanHelicopterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelicopterSolid(props: LanHelicopterSolidProps): React.ReactElement;
export default LanHelicopterSolid;
