import React from 'react';

export interface LanRectangleLandscapeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleLandscapeRegular(props: LanRectangleLandscapeRegularProps): React.ReactElement;
export default LanRectangleLandscapeRegular;
