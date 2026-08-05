import React from 'react';

export interface LanEscalatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEscalatorSolid(props: LanEscalatorSolidProps): React.ReactElement;
export default LanEscalatorSolid;
