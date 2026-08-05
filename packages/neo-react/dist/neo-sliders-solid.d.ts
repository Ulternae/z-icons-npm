import React from 'react';

export interface NeoSlidersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSlidersSolid(props: NeoSlidersSolidProps): React.ReactElement;
export default NeoSlidersSolid;
