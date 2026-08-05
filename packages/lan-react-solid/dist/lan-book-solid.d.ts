import React from 'react';

export interface LanBookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookSolid(props: LanBookSolidProps): React.ReactElement;
export default LanBookSolid;
