import React from 'react';

export interface CorePawProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaw(props: CorePawProps): React.ReactElement;
export default CorePaw;
