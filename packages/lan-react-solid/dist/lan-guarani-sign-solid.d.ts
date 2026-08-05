import React from 'react';

export interface LanGuaraniSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuaraniSignSolid(props: LanGuaraniSignSolidProps): React.ReactElement;
export default LanGuaraniSignSolid;
