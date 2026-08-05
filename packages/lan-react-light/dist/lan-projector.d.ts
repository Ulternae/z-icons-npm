import React from 'react';

export interface LanProjectorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanProjector(props: LanProjectorProps): React.ReactElement;
export default LanProjector;
