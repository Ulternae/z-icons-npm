import React from 'react';

export interface LanLocustSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLocustSolid(props: LanLocustSolidProps): React.ReactElement;
export default LanLocustSolid;
