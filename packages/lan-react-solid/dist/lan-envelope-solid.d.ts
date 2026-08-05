import React from 'react';

export interface LanEnvelopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeSolid(props: LanEnvelopeSolidProps): React.ReactElement;
export default LanEnvelopeSolid;
