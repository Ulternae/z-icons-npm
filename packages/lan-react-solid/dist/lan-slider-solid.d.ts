import React from 'react';

export interface LanSliderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSliderSolid(props: LanSliderSolidProps): React.ReactElement;
export default LanSliderSolid;
