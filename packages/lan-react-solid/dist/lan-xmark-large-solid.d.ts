import React from 'react';

export interface LanXmarkLargeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXmarkLargeSolid(props: LanXmarkLargeSolidProps): React.ReactElement;
export default LanXmarkLargeSolid;
