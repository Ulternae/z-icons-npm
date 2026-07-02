import React from 'react';

export interface CorePlaneUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlaneUp(props: CorePlaneUpProps): React.ReactElement;
export default CorePlaneUp;
