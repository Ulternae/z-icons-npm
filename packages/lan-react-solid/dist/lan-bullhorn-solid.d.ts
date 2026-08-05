import React from 'react';

export interface LanBullhornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullhornSolid(props: LanBullhornSolidProps): React.ReactElement;
export default LanBullhornSolid;
