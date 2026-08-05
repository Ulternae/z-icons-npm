import React from 'react';

export interface LanSliderCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSliderCircleSolid(props: LanSliderCircleSolidProps): React.ReactElement;
export default LanSliderCircleSolid;
