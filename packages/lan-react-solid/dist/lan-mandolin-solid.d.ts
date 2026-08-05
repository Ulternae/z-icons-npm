import React from 'react';

export interface LanMandolinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMandolinSolid(props: LanMandolinSolidProps): React.ReactElement;
export default LanMandolinSolid;
