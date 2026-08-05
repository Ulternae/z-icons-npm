import React from 'react';

export interface LanOctagonCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonCheckSolid(props: LanOctagonCheckSolidProps): React.ReactElement;
export default LanOctagonCheckSolid;
