import React from 'react';

export interface CoreFaceLaughProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFaceLaugh(props: CoreFaceLaughProps): React.ReactElement;
export default CoreFaceLaugh;
