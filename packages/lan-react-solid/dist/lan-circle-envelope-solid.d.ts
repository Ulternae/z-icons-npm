import React from 'react';

export interface LanCircleEnvelopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEnvelopeSolid(props: LanCircleEnvelopeSolidProps): React.ReactElement;
export default LanCircleEnvelopeSolid;
