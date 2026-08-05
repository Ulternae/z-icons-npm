import React from 'react';

export interface LanListUlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListUlSolid(props: LanListUlSolidProps): React.ReactElement;
export default LanListUlSolid;
