import React from 'react';

export interface NeoDoorClosedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoDoorClosed(props: NeoDoorClosedProps): React.ReactElement;
export default NeoDoorClosed;
