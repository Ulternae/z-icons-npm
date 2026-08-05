import React from 'react';

export interface LanHippoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHippoSolid(props: LanHippoSolidProps): React.ReactElement;
export default LanHippoSolid;
