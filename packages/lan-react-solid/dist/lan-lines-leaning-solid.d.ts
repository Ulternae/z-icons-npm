import React from 'react';

export interface LanLinesLeaningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinesLeaningSolid(props: LanLinesLeaningSolidProps): React.ReactElement;
export default LanLinesLeaningSolid;
