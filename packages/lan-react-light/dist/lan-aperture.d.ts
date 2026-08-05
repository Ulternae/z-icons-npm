import React from 'react';

export interface LanApertureProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAperture(props: LanApertureProps): React.ReactElement;
export default LanAperture;
