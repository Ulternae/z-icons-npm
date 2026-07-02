import React from 'react';

export interface CoreFaceMehProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFaceMeh(props: CoreFaceMehProps): React.ReactElement;
export default CoreFaceMeh;
