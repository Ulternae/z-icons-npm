import React from 'react';

export interface LanBringFrontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBringFront(props: LanBringFrontProps): React.ReactElement;
export default LanBringFront;
