import React from 'react';

export interface NeoVideoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVideo(props: NeoVideoProps): React.ReactElement;
export default NeoVideo;
