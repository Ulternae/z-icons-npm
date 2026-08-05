import React from 'react';

export interface LanCloverSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloverSolid(props: LanCloverSolidProps): React.ReactElement;
export default LanCloverSolid;
