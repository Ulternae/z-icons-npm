import React from 'react';

export interface LanAppleCoreSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAppleCoreSolid(props: LanAppleCoreSolidProps): React.ReactElement;
export default LanAppleCoreSolid;
