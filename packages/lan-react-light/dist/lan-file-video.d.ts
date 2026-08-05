import React from 'react';

export interface LanFileVideoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileVideo(props: LanFileVideoProps): React.ReactElement;
export default LanFileVideo;
