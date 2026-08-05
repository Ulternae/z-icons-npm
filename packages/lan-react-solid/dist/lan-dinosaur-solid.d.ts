import React from 'react';

export interface LanDinosaurSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDinosaurSolid(props: LanDinosaurSolidProps): React.ReactElement;
export default LanDinosaurSolid;
