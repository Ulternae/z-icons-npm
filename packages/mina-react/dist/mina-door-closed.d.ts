import React from 'react';

export interface MinaDoorClosedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDoorClosed(props: MinaDoorClosedProps): React.ReactElement;
export default MinaDoorClosed;
