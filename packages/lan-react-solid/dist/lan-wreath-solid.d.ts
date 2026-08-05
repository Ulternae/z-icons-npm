import React from 'react';

export interface LanWreathSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWreathSolid(props: LanWreathSolidProps): React.ReactElement;
export default LanWreathSolid;
