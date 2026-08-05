import React from 'react';

export interface LanFireHydrantSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireHydrantSolid(props: LanFireHydrantSolidProps): React.ReactElement;
export default LanFireHydrantSolid;
