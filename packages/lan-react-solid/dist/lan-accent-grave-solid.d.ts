import React from 'react';

export interface LanAccentGraveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAccentGraveSolid(props: LanAccentGraveSolidProps): React.ReactElement;
export default LanAccentGraveSolid;
