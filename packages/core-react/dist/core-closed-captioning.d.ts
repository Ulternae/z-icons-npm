import React from 'react';

export interface CoreClosedCaptioningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreClosedCaptioning(props: CoreClosedCaptioningProps): React.ReactElement;
export default CoreClosedCaptioning;
