import React from 'react';

export interface LanFileAiffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAiffSolid(props: LanFileAiffSolidProps): React.ReactElement;
export default LanFileAiffSolid;
