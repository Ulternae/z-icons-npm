import React from 'react';

export interface LanBrightnessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrightnessSolid(props: LanBrightnessSolidProps): React.ReactElement;
export default LanBrightnessSolid;
