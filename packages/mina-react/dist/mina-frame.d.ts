import React from 'react';

export interface MinaFrameProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFrame(props: MinaFrameProps): React.ReactElement;
export default MinaFrame;
