import React from 'react';

export interface LanHomeBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeBlankSolid(props: LanHomeBlankSolidProps): React.ReactElement;
export default LanHomeBlankSolid;
