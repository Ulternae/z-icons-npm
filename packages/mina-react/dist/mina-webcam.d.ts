import React from 'react';

export interface MinaWebcamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWebcam(props: MinaWebcamProps): React.ReactElement;
export default MinaWebcam;
