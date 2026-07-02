import React from 'react';

export interface CoreSlidersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSlidersSolid(props: CoreSlidersSolidProps): React.ReactElement;
export default CoreSlidersSolid;
