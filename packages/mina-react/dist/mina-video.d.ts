import React from 'react';

export interface MinaVideoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVideo(props: MinaVideoProps): React.ReactElement;
export default MinaVideo;
