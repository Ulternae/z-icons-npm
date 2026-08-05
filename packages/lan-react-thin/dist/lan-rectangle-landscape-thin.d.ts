import React from 'react';

export interface LanRectangleLandscapeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleLandscapeThin(props: LanRectangleLandscapeThinProps): React.ReactElement;
export default LanRectangleLandscapeThin;
