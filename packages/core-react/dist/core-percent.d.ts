import React from 'react';

export interface CorePercentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePercent(props: CorePercentProps): React.ReactElement;
export default CorePercent;
