import React from 'react';

export interface CoreVideoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVideo(props: CoreVideoProps): React.ReactElement;
export default CoreVideo;
