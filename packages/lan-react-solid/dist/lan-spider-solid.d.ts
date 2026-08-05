import React from 'react';

export interface LanSpiderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpiderSolid(props: LanSpiderSolidProps): React.ReactElement;
export default LanSpiderSolid;
