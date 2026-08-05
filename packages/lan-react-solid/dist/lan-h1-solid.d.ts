import React from 'react';

export interface LanH1SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH1Solid(props: LanH1SolidProps): React.ReactElement;
export default LanH1Solid;
