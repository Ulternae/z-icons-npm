import React from 'react';

export interface LanTShirtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTShirtSolid(props: LanTShirtSolidProps): React.ReactElement;
export default LanTShirtSolid;
