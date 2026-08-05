import React from 'react';

export interface LanOverlineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOverlineSolid(props: LanOverlineSolidProps): React.ReactElement;
export default LanOverlineSolid;
