import React from 'react';

export interface LanJediSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJediSolid(props: LanJediSolidProps): React.ReactElement;
export default LanJediSolid;
