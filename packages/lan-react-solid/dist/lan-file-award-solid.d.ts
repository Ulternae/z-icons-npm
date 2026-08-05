import React from 'react';

export interface LanFileAwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAwardSolid(props: LanFileAwardSolidProps): React.ReactElement;
export default LanFileAwardSolid;
