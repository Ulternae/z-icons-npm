import React from 'react';

export interface CoreFrameProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFrame(props: CoreFrameProps): React.ReactElement;
export default CoreFrame;
