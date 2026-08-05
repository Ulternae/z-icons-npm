import React from 'react';

export interface MinaApertureProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAperture(props: MinaApertureProps): React.ReactElement;
export default MinaAperture;
