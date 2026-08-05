import React from 'react';

export interface MinaDoorOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDoorOpen(props: MinaDoorOpenProps): React.ReactElement;
export default MinaDoorOpen;
