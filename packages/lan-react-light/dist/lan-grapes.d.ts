import React from 'react';

export interface LanGrapesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrapes(props: LanGrapesProps): React.ReactElement;
export default LanGrapes;
