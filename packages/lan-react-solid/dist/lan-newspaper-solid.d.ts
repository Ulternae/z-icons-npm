import React from 'react';

export interface LanNewspaperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNewspaperSolid(props: LanNewspaperSolidProps): React.ReactElement;
export default LanNewspaperSolid;
