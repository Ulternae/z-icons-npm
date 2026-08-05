import React from 'react';

export interface LanBarcodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeSolid(props: LanBarcodeSolidProps): React.ReactElement;
export default LanBarcodeSolid;
