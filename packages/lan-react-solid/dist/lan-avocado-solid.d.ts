import React from 'react';

export interface LanAvocadoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAvocadoSolid(props: LanAvocadoSolidProps): React.ReactElement;
export default LanAvocadoSolid;
