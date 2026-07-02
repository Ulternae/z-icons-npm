import React from 'react';

export interface CorePaperPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaperPlane(props: CorePaperPlaneProps): React.ReactElement;
export default CorePaperPlane;
