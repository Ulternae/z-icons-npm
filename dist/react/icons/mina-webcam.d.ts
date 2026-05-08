import React from 'react';

export interface MinaWebcamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWebcam: React.FC<MinaWebcamProps>;
export default MinaWebcam;
