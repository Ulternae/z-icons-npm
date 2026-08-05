import React from 'react';

export interface LanRectangleLandscapeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleLandscape(props: LanRectangleLandscapeProps): React.ReactElement;
export default LanRectangleLandscape;
