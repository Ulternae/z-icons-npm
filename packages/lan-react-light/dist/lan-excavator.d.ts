import React from 'react';

export interface LanExcavatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExcavator(props: LanExcavatorProps): React.ReactElement;
export default LanExcavator;
