import React from 'react';

export interface LanEyeEvilSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeEvilSolid(props: LanEyeEvilSolidProps): React.ReactElement;
export default LanEyeEvilSolid;
