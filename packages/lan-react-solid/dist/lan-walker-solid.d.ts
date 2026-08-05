import React from 'react';

export interface LanWalkerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWalkerSolid(props: LanWalkerSolidProps): React.ReactElement;
export default LanWalkerSolid;
