import React from 'react';

export interface LanOptionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOptionSolid(props: LanOptionSolidProps): React.ReactElement;
export default LanOptionSolid;
