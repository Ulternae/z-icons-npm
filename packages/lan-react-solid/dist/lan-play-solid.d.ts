import React from 'react';

export interface LanPlaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaySolid(props: LanPlaySolidProps): React.ReactElement;
export default LanPlaySolid;
