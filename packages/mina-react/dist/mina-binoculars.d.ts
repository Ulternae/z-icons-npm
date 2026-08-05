import React from 'react';

export interface MinaBinocularsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBinoculars(props: MinaBinocularsProps): React.ReactElement;
export default MinaBinoculars;
