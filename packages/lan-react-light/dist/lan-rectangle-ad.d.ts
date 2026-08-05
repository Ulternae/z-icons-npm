import React from 'react';

export interface LanRectangleAdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleAd(props: LanRectangleAdProps): React.ReactElement;
export default LanRectangleAd;
