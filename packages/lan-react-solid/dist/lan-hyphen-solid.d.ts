import React from 'react';

export interface LanHyphenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHyphenSolid(props: LanHyphenSolidProps): React.ReactElement;
export default LanHyphenSolid;
