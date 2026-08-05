import React from 'react';

export interface LanEyeDropperFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeDropperFullSolid(props: LanEyeDropperFullSolidProps): React.ReactElement;
export default LanEyeDropperFullSolid;
