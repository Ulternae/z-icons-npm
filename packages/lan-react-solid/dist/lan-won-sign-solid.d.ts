import React from 'react';

export interface LanWonSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWonSignSolid(props: LanWonSignSolidProps): React.ReactElement;
export default LanWonSignSolid;
