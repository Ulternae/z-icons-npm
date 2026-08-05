import React from 'react';

export interface LanWindowFrameProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowFrame(props: LanWindowFrameProps): React.ReactElement;
export default LanWindowFrame;
