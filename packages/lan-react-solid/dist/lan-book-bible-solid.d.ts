import React from 'react';

export interface LanBookBibleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookBibleSolid(props: LanBookBibleSolidProps): React.ReactElement;
export default LanBookBibleSolid;
