import React from 'react';

export interface LanCircleVideoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleVideo(props: LanCircleVideoProps): React.ReactElement;
export default LanCircleVideo;
