import React from 'react';

export interface LanGlobePointerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobePointer(props: LanGlobePointerProps): React.ReactElement;
export default LanGlobePointer;
