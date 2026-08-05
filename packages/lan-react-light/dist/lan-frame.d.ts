import React from 'react';

export interface LanFrameProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrame(props: LanFrameProps): React.ReactElement;
export default LanFrame;
