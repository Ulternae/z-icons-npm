import React from 'react';

export interface CoreApertureProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAperture(props: CoreApertureProps): React.ReactElement;
export default CoreAperture;
