import React from 'react';

export interface LanServerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanServerSolid(props: LanServerSolidProps): React.ReactElement;
export default LanServerSolid;
