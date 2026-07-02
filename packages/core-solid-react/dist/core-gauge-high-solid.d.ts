import React from 'react';

export interface CoreGaugeHighSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGaugeHighSolid(props: CoreGaugeHighSolidProps): React.ReactElement;
export default CoreGaugeHighSolid;
