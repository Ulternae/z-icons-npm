import React from 'react';

export interface LanTreePalmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreePalmSolid(props: LanTreePalmSolidProps): React.ReactElement;
export default LanTreePalmSolid;
