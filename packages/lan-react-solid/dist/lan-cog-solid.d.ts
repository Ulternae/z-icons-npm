import React from 'react';

export interface LanCogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCogSolid(props: LanCogSolidProps): React.ReactElement;
export default LanCogSolid;
