import React from 'react';

export interface LanFaceLaughSquintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLaughSquint(props: LanFaceLaughSquintProps): React.ReactElement;
export default LanFaceLaughSquint;
