import React from 'react';

export interface NeoPaperPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPaperPlane(props: NeoPaperPlaneProps): React.ReactElement;
export default NeoPaperPlane;
