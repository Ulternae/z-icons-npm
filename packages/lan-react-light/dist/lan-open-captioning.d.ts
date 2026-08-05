import React from 'react';

export interface LanOpenCaptioningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOpenCaptioning(props: LanOpenCaptioningProps): React.ReactElement;
export default LanOpenCaptioning;
