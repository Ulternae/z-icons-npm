import React from 'react';

export interface NeoGearSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGearSolid(props: NeoGearSolidProps): React.ReactElement;
export default NeoGearSolid;
