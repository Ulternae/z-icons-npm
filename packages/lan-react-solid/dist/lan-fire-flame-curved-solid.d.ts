import React from 'react';

export interface LanFireFlameCurvedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireFlameCurvedSolid(props: LanFireFlameCurvedSolidProps): React.ReactElement;
export default LanFireFlameCurvedSolid;
